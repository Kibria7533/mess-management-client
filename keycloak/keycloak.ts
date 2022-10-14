import {COOKIE_KEY_AUTH_ID_TOKEN} from '../shared/constants/AppConst';
import {getBrowserCookie} from './cookieInstance';
import {futureNationDomain} from '../common/constants';
import {getHostUrl} from '../utilities/helpers';
import {keycloakConfigs} from "./keycloakConfigs";

function createUUID() {
  return 'akciegladjgledjgorwamfkgitlejslcsogd';
}

interface IKeycloakConfig {
  realm: string,
  clientId: string,
  clientSecret: string,
  loginUrl: string,
  logoutUrl: string,
  passwordUpdateUrl: string,
  tokenUrl: string,
  loginCallbackUri: string,
  logoutCallbackUri: string,
  updatePasswordCallback: string,
}

export const keycloakConfig: IKeycloakConfig = ((env: 'local' | 'stage' | 'prod' | string) => {
  return keycloakConfigs[env];
})(process.env.NEXT_ENV || 'local');


function Keycloak(this: any, config: any) {
  if (!(this instanceof Keycloak)) {
    return new (Keycloak as any)(config);
  }

  const kc: any = this;
  let adapter: any;

  kc.init = function () {
    kc.authenticated = false;

    adapter = loadAdapter();

    function loadAdapter() {
      return {
        login: function (options: any) {
          window.location.href = kc.createLoginUrl(options);
        },
        logout: function (options: any) {
          window.location.href = kc.createLogoutUrl(options);
        },
      };
    }

    kc.createLogoutUrl = function (options: any) {
      let redirectUrl='http://localhost:3000/'
      // let redirectUrl = new URL(
      //   futureNationDomain() + keycloakConfig.logoutCallbackUri,
      // );

      let url =
        keycloakConfig.logoutUrl +
        '?client_id=' +
        encodeURIComponent(keycloakConfig.clientId) +
        '&post_logout_redirect_uri=' +
        encodeURIComponent(redirectUrl.toString());

      if (getBrowserCookie(COOKIE_KEY_AUTH_ID_TOKEN)) {
        url +=
        '&id_token_hint=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICItSVdSaTdEaXB5T1FYaWhQbVphOWVDN1NBbHZab2dtOVU0TEMxVkxmVDRJIn0.eyJleHAiOjE2NjUyODg5ODksImlhdCI6MTY2NTI4ODY4OSwiYXV0aF90aW1lIjowLCJqdGkiOiJlOWJmZThiYi04ZWE2LTQ4ZTYtOGI1ZS1lZDNjM2NiZDkxYzkiLCJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwODAvYXV0aC9yZWFsbXMvbXltZXNzIiwiYXVkIjoiYWRtaW4tY2xpIiwic3ViIjoiMzE4YTFhMjgtYTBiZS00ZTczLWEyNWYtNWYzNGViNGVkOTc1IiwidHlwIjoiSUQiLCJhenAiOiJhZG1pbi1jbGkiLCJzZXNzaW9uX3N0YXRlIjoiMDRiZjg1ODMtN2M5Mi00ZDM0LTk2MzctNmM0OWMxNzI1Mzk3IiwiYXRfaGFzaCI6ImI0bGJGWUk2UFBLSk1XNGpzMUY3ZXciLCJhY3IiOiIxIiwic2lkIjoiMDRiZjg1ODMtN2M5Mi00ZDM0LTk2MzctNmM0OWMxNzI1Mzk3IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJHb2xhbSBLaWJyaWEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJraWJyaWEiLCJnaXZlbl9uYW1lIjoiR29sYW0iLCJmYW1pbHlfbmFtZSI6IktpYnJpYSIsImVtYWlsIjoiZ2tpYnJpYWl1QGdtYWlsLmNvbSJ9.pbgsILbyDdu1Ey4C9ZaHKdWVBWPvjN2F4obd4S-IlLEh_A9apJKn7KkYVTO2BSC4ufxxlofRp9VvgoeIK39ASDKBNK27NB6CimNKQTYto0XoWA9K8IFl3RXg6isk9qKvUlFWQmz-NSNDL0q0spKnPeIQo7e_wHVcmAS6WkEfu6jIm2JsJb6SgDngxbjQxPNdgpgdAr_CMIqRWXvgkUmeEhiyQAhpwQPFc4ciwKWXn1Oq4Z1l19wCaflxablarrqkmhJ9gHhgjW6FgkRBKuK21Aeu3c8BzJXRcGs1HQ_1eTI7tkY03AlLqao4BBhzV47cmmNdvRTZdXlN7SAQpDINOA'
          // '&id_token_hint=' +
          // encodeURIComponent(getBrowserCookie(COOKIE_KEY_AUTH_ID_TOKEN));
      }

      return url;
    };

    kc.createLoginUrl = function (options: any) {
      let state = createUUID();

      let baseUrl = keycloakConfig.loginUrl;
      let scope = 'openid';

      // const redirectUrl = new URL(
      //   getHostUrl() + keycloakConfig.loginCallbackUri,
      // );
      const redirectUrl=`http://localhost:3000/welcomes/welcome`


      return (
        baseUrl +
        '?client_id=' +
        encodeURIComponent(keycloakConfig.clientId) +
        '&redirect_uri=' +
          redirectUrl
        // encodeURIComponent(redirectUrl.toString()) +
      +
        '&state=' +
        encodeURIComponent(state) +
        // + '&response_mode=' + encodeURIComponent(kc.responseMode)
        '&response_type=code' +
        '&scope=' +
        encodeURIComponent(scope)
      );
    };

    kc.updatePasswordUrl = function (options: any) {
      let state = createUUID();
      let baseUrl = keycloakConfig.passwordUpdateUrl;

      const redirectUrl = new URL(
        getHostUrl() + keycloakConfig.updatePasswordCallback,
      );

      return (
        baseUrl +
        '?client_id=' +
        encodeURIComponent(keycloakConfig.clientId) +
        '&redirect_uri=' +
        encodeURIComponent(redirectUrl.toString()) +
        '&state=' +
        encodeURIComponent(state) +
        '&response_type=code' +
        '&kc_action=UPDATE_PASSWORD'
      );
    };

    kc.login = function (options: any) {
      return adapter.login(options);
    };
    kc.logout = function (options: any) {
      return adapter.logout(options);
    };
  };
}

const keycloakInstance = new (Keycloak as any)({});
keycloakInstance.init();

export const getSSOLoginUrl = () => {
  console.log('koolk',keycloakInstance.createLoginUrl())
  return keycloakInstance.createLoginUrl();
};
export const getSSOLogoutUrl = () => keycloakInstance.createLogoutUrl();

export const getSSOUpdatePasswordUrl = () =>
  keycloakInstance.updatePasswordUrl();

export {keycloakInstance};
