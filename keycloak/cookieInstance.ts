import {Cookies} from 'react-cookie';
import {
  Cookie,
  CookieGetOptions,
  CookieSetOptions,
} from 'universal-cookie/cjs/types';
import {cookieDomain} from '../common/constants';

const cookieInstance = new Cookies();

export const getBrowserCookie = (name: string, options?: CookieGetOptions) => {
  return cookieInstance.get(name, options);
};

export const setBrowserCookie = (
  name: string,
  value: Cookie,
  options?: CookieSetOptions,
) => {
  const defaultOptions: CookieSetOptions = {
    path: '/',
    domain: cookieDomain(),
  };

  return cookieInstance.set(
    name,
    value,
    typeof options !== 'undefined'
      ? {...defaultOptions, ...options}
      : defaultOptions,
  );
};

export const removeBrowserCookie = (
  name: string,
  options?: CookieSetOptions,
) => {

  const defaultOptions: CookieSetOptions = {
    path: '/',
    domain: cookieDomain(),
  };

  return cookieInstance.remove(
    name,
    typeof options !== 'undefined' ? {...defaultOptions, ...options} : defaultOptions,
  );
};

export default cookieInstance;
