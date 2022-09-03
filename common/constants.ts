import {
  NEXT_PUBLIC_FRONTEND_ADMIN_PORTAL_DOMAIN,
  NEXT_PUBLIC_FRONTEND_ASSESSMENT_DOMAIN,
  NEXT_PUBLIC_FRONTEND_JRE_DOMAIN,
  NEXT_PUBLIC_FRONTEND_PORTAL_DOMAIN,
  NEXT_PUBLIC_FUTURE_NATION_COOKIE_DOMAIN,
} from './envConstants';

export const RESEND_CODE_RETRY_TIME_IN_MILLIS = 1000 * 180;
export const DATE_OF_BIRTH_MIN_AGE = 1; //age in years

export const isLocalHost = () =>
  typeof window !== 'undefined' && window?.location?.hostname
    ? location.hostname === 'localhost' || location.hostname === '127.0.0.1'
    : '';

export const adminDomain = () => {
  return NEXT_PUBLIC_FRONTEND_ADMIN_PORTAL_DOMAIN;
};

export const assessmentDomain = () => {
  return NEXT_PUBLIC_FRONTEND_ASSESSMENT_DOMAIN;
};

export const jreDomain = () => {
  return NEXT_PUBLIC_FRONTEND_JRE_DOMAIN;
};

export const futureNationDomain = () => {
  return NEXT_PUBLIC_FRONTEND_PORTAL_DOMAIN;
};

export const cookieDomain = () => {
  return NEXT_PUBLIC_FUTURE_NATION_COOKIE_DOMAIN;
};

export const goToMyProfilePage = () => {
  return futureNationDomain() + '/my-profile';
};

export const PROFILE_SETUP_KEYS = {
  EDUCATIONAL_LEVEL: 'educational-level',
  INTEREST: 'interest',
  SKILL_MAPPING: 'skill-mapping',
  ASPIRE_TO_BE: 'aspire-to-be',
};
