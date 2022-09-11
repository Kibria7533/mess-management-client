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
      let redirectUrl = new URL(
        futureNationDomain() + keycloakConfig.logoutCallbackUri,
      );

      let url =
        keycloakConfig.logoutUrl +
        '?client_id=' +
        encodeURIComponent(keycloakConfig.clientId) +
        '&post_logout_redirect_uri=' +
        encodeURIComponent(redirectUrl.toString());

      if (getBrowserCookie(COOKIE_KEY_AUTH_ID_TOKEN)) {
        url +=
          '&id_token_hint=' +
          encodeURIComponent(getBrowserCookie(COOKIE_KEY_AUTH_ID_TOKEN));
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
      const redirectUrl=`http://localhost:3000/statements/statement`


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
