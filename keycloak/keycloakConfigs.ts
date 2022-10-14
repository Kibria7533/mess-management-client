export const keycloakConfigs: any = {
  local: {
    realm: 'mymess',
    clientId: 'admin-cli',
    clientSecret: 'yfZP19xNuY7JUoC0D0BYSMzqIHwCjZNB',
    loginUrl:
      'http://localhost:8080/auth/realms/mymess/protocol/openid-connect/auth',
    logoutUrl:
      'http://localhost:8080/auth/realms/mymess/protocol/openid-connect/logout',
    passwordUpdateUrl:
      'http://localhost:8080/auth/realms/mymess/protocol/openid-connect/auth',
    tokenUrl:
      'http://localhost:8080/auth/realms/mymess/protocol/openid-connect/token',
    loginCallbackUri: '/callback',
    logoutCallbackUri: '/logout',
    updatePasswordCallback: '/callback-update-password',
  },
  stage: {
    realm: 'future-nation-web',
    clientId: 'future-nation',
    clientSecret: 'aqXl7V7kXDhWjfoKDaQIQwFzmDMsFnnV',
    loginUrl:
      'https://idp.futurenation.gov.bd/auth/realms/future-nation-web/protocol/openid-connect/auth',
    logoutUrl:
      'https://idp.futurenation.gov.bd/auth/realms/future-nation-web/protocol/openid-connect/logout',
    passwordUpdateUrl:
      'https://idp.futurenation.gov.bd/auth/realms/future-nation-web/protocol/openid-connect/auth',
    tokenUrl:
      'https://idp.futurenation.gov.bd/auth/realms/future-nation-web/protocol/openid-connect/token',
    loginCallbackUri: '/callback',
    logoutCallbackUri: '/logout',
    updatePasswordCallback: '/callback-update-password',
  },
  prod: {
    realm: 'future-nation-web',
    clientId: 'future-nation',
    clientSecret: 'aqXl7V7kXDhWjfoKDaQIQwFzmDMsFnnV',
    loginUrl:
      'https://idp.futurenation.gov.bd/auth/realms/future-nation-web/protocol/openid-connect/auth',
    logoutUrl:
      'https://idp.futurenation.gov.bd/auth/realms/future-nation-web/protocol/openid-connect/logout',
    passwordUpdateUrl:
      'https://idp.futurenation.gov.bd/auth/realms/future-nation-web/protocol/openid-connect/auth',
    tokenUrl:
      'https://idp.futurenation.gov.bd/auth/realms/future-nation-web/protocol/openid-connect/token',
    loginCallbackUri: '/callback',
    logoutCallbackUri: '/logout',
    updatePasswordCallback: '/callback-update-password',
  },
};
