import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {COOKIE_KEY_APP_ACCESS_TOKEN, COOKIE_KEY_AUTH_ACCESS_TOKEN_DATA,} from '../../shared/constants/AppConst';
import {getBrowserCookie, removeBrowserCookie, setBrowserCookie,} from './cookieInstance';
import registerAxiosMockAdapter from './registerAxiosMockAdapter';
import {getSSOLoginUrl, keycloakConfig} from './keycloak/keycloak';
import {API_BASE_SERVICE_PATH, API_PUBLIC_BACK_CHANNEL_URL_KEYCLOAK_AUTH_TOKEN_REFRESH} from "../common/apiRoutes2";
import {getHostUrl} from "../utilities/helpers";

let retryAuthRefreshToken = 0;
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_SERVICE_PATH,
  timeout: 300000,
});
axiosInstance.defaults.headers.common['Accept'] = 'application/json';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const authAccessTokenData = getBrowserCookie(
      COOKIE_KEY_AUTH_ACCESS_TOKEN_DATA,
    );

    if (!config.headers['KongAuthToken']) {
      const appAccessTokenData = getBrowserCookie(COOKIE_KEY_APP_ACCESS_TOKEN);
      config.headers[
        'KongAuthToken'
        ] = `Bearer ${appAccessTokenData?.access_token}`;
    }

    const userAccessToken = authAccessTokenData?.access_token;
    if (!config.headers['Authorization'] && userAccessToken) {
      config.headers['Authorization'] = `Bearer ${userAccessToken}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  (response) => {
    // console.count('countSuccessRequest');
    return response;
  },
  async function (error) {
    console.count('countFailedRequest');
    if (error?.response?.status === 401) {
      const authAccessTokenData = getBrowserCookie(
        COOKIE_KEY_AUTH_ACCESS_TOKEN_DATA,
      );
      if (authAccessTokenData) {
        await refreshAuthAccessToken();
      } else {
        await refreshAppAccessToken();
      }
    }
    return Promise.reject(error);
  },
);

async function refreshAuthAccessToken() {
  if (retryAuthRefreshToken === 20) {
    removeBrowserCookie(COOKIE_KEY_AUTH_ACCESS_TOKEN_DATA);
    window.location.href = getSSOLoginUrl();
  }
  retryAuthRefreshToken++;
  console.log('refreshAuthAccessToken');
  const authAccessTokenData = getBrowserCookie(
    COOKIE_KEY_AUTH_ACCESS_TOKEN_DATA,
  );

  let appAccessTokenData = getBrowserCookie(COOKIE_KEY_APP_ACCESS_TOKEN);
  if (!appAccessTokenData) {
    await refreshAppAccessToken();
    appAccessTokenData = getBrowserCookie(COOKIE_KEY_APP_ACCESS_TOKEN);
  }

  if (authAccessTokenData?.refresh_token) {
    try {
      const redirectUrl = new URL(getHostUrl() + keycloakConfig.loginCallbackUri);

      let {
        data: {id_token, ...responseTokenData},
      } = await axiosInstance.post(
        API_PUBLIC_BACK_CHANNEL_URL_KEYCLOAK_AUTH_TOKEN_REFRESH,
        {
          refresh_token: authAccessTokenData.refresh_token,
          redirect_uri: encodeURI(redirectUrl.toString()),
        },
        {},
      );

      setBrowserCookie(COOKIE_KEY_AUTH_ACCESS_TOKEN_DATA, responseTokenData);

      retryAuthRefreshToken = 0;
    } catch (e) {
      console.log('refreshAuthAccessToken-error', e);
      removeBrowserCookie(COOKIE_KEY_AUTH_ACCESS_TOKEN_DATA);
    }
  } else {
    removeBrowserCookie(COOKIE_KEY_AUTH_ACCESS_TOKEN_DATA);
  }
}

export async function refreshAppAccessToken() {
  try {
    let response = await getAppAccessToken({
      throwError: true,
    });

    const {data: tokenData}: any = response;

    let expireDate = new Date();
    expireDate.setTime(
      new Date().getTime() + Number(tokenData.expires_in) * 1000,
    );
    setBrowserCookie(COOKIE_KEY_APP_ACCESS_TOKEN, tokenData, {
      expires: expireDate,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getAppAccessToken({throwError = false} = {}) {
  try {
    // return await axios.post('/public/back-channel/kong-auth-token', {}, {baseURL: API_BASE_URL});
    return {
      data: {
        expires_in: 7200,
        token_type: 'bearer',
        access_token: 'pnQaDGaFgIUMSot89V2GqdftuXeCDTxm',
      },
    };
  } catch (e: any) {
    if (throwError) {
      throw e;
    }
  }
}

registerAxiosMockAdapter(axiosInstance);

export default axiosInstance;
