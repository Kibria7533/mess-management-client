import {NEXT_PUBLIC_API_BASE_URL} from './envConstants';

export const API_BASE_SERVICE_PATH = NEXT_PUBLIC_API_BASE_URL;

export const API_BASE_PUBLIC_SERVICE_PATH = '/public';
export const API_BASE_PROTECTED_SERVICE_PATH = '/protected';
//export const API_BASE_PRIVATE_SERVICE_PATH = /private';
export const API_BASE_SERVICE_PUBLIC_BACK_CHANNEL_URL =
  API_BASE_SERVICE_PATH + API_BASE_PUBLIC_SERVICE_PATH + '/back-channel';

export const API_YOUTHS_SERVICE_PATH = '/youths';
export const API_YOUTH_SERVICE_PATH = '/youth';
export const API_RECRUITER_SERVICE_PATH = '/recruiters';
export const API_AUTH_SERVICE_PATH = '/auth';

export const API_PUBLIC_BACK_CHANNEL_URL_KEYCLOAK_AUTH_TOKEN =
  API_BASE_SERVICE_PUBLIC_BACK_CHANNEL_URL + '/keycloak-auth-token';
export const API_PUBLIC_BACK_CHANNEL_URL_KEYCLOAK_AUTH_TOKEN_REFRESH =
  API_BASE_SERVICE_PUBLIC_BACK_CHANNEL_URL + '/sso-renew-access-token';

export const API_USER_MOBILE_VERIFICATION_SEND =
  API_BASE_SERVICE_PATH + '/registrations/youth/mobile-verification-send';

export const API_YOUTH_MOBILE_VERIFICATION_SEND =
  '/registrations/youth/mobile-verification-send';

export const API_USER_MOBILE_VERIFICATION_RECEIVE =
  API_BASE_SERVICE_PATH + '/registrations/mobile-verification-receive';

export const API_USER_REGISTRATION = '/registrations';

export const API_YOUTH_REGISTRATION = '/registrations/youth';

export const API_RECRUITER_PROFILE = API_RECRUITER_SERVICE_PATH + '/profile';

export const API_AUTH_PROFILE = API_AUTH_SERVICE_PATH + '/profile';
export const API_YOUTH_AREA_OF_ASPIRATION = API_AUTH_SERVICE_PATH + '/profile';

export const API_RECRUITER_SKILLS = API_RECRUITER_SERVICE_PATH + '/skills';

export const API_YOUTH_AREA_OF_ASPIRATIONS =
  API_YOUTHS_SERVICE_PATH + '/area-of-aspirations';

export const API_YOUTH_SKILLS = '/youths/skills';
export const API_YOUTH_BASIC_SKILLS = '/youths/basic-skills';
export const API_YOUTH_SPECIALIZED_SKILLS = '/youths/specialized-skills';

export const API_AREA_OF_ASPIRATIONS =
  API_BASE_PUBLIC_SERVICE_PATH + '/area-of-aspirations';

export const API_BASIC_SKILLS = API_BASE_PUBLIC_SERVICE_PATH + '/basic-skills';

export const API_SPECIALIZED_SKILLS =
  API_BASE_PUBLIC_SERVICE_PATH + '/specialized-skills';

export const API_YOUTH_UPDATE = API_YOUTHS_SERVICE_PATH;
export const API_YOUTH_DOWNLOAD_CV = API_YOUTH_SERVICE_PATH + '/cv';
export const API_PROTECTED_YOUTH_DOWNLOAD_CV =
  API_BASE_PROTECTED_SERVICE_PATH + '/youth/cv';
export const API_YOUTH_EDUCATIONS = '/youth/educations';

export const API_PROTECTED_YOUTH_EDUCATIONS =
  API_BASE_PROTECTED_SERVICE_PATH + '/youth/educations';

export const API_COUNTRIES = API_BASE_PUBLIC_SERVICE_PATH + '/countries';

export const API_AREA_OF_INTERESTS =
  API_BASE_PUBLIC_SERVICE_PATH + '/area-of-businesses';

export const API_YOUTH_AREA_OF_INTERESTS = 'youth/area-of-interests';

export const API_APTITUDE_TEST = '/aptitude-test';
export const API_APTITUDE_TEST_RESULT = API_APTITUDE_TEST + '/result';

export const API_EXAM_QUESTION_BANK = '/questions';

export const API_PROTECTED_COURSES =
  API_BASE_PROTECTED_SERVICE_PATH + '/courses';

export const API_SUGGESTED_COURSES =
  API_PROTECTED_COURSES + '/suggested-courses';

export const API_EDUCATION_BOARDS =
  API_BASE_PUBLIC_SERVICE_PATH + '/education-boards';

export const API_EDUCATION_LEVELS =
  API_BASE_PUBLIC_SERVICE_PATH + '/education-levels';

export const API_EDUCATION_GROUPS =
  API_BASE_PUBLIC_SERVICE_PATH + '/education-groups';

export const API_EDUCATION_DEGREES =
  API_BASE_PUBLIC_SERVICE_PATH + '/education-degrees';

export const API_EDUCATION_RESULT_TYPES =
  API_BASE_PUBLIC_SERVICE_PATH + '/education/results';

export const API_ANSWER_SHEET = API_APTITUDE_TEST + '/test-submissions';

export const API_COMPLETION_STATUS_OF_ASSESSMENT_OR_PROFILE =
  API_YOUTHS_SERVICE_PATH + '/profile-percentage';

export const FILE_SERVER_UPLOAD_ENDPOINT =
  process.env.PUBLIC_FILE_SERVER_UPLOAD_ENDPOINT ||
  'https://file.nise3.xyz/test';
export const FILE_SERVER_FILE_VIEW_ENDPOINT =
  process.env.PUBLIC_FILE_SERVER_FILE_VIEW_ENDPOINT ||
  'https://file.nise.gov.bd/uploads/';

/** Core User service private routes section start */
export const API_ROLES = '/roles';
export const API_PERMISSIONS = '/permissions';
export const API_USERS = '/users';
export const API_YOUTHS = '/youths';
export const API_PROTECTED_YOUTHS = API_BASE_PROTECTED_SERVICE_PATH + '/youths';
export const API_USER_TYPES = '/userTypes';
export const PROFILE_UPDATE = '/profile-update';

/** Youth service routes section start */
export const API_YOUTH_REGISTRATION_VERIFICATION =
  '/youth-profile-verification';
export const API_SEND_YOUTH_REGISTRATION_VERIFICATION_CODE =
  '/youth-resend-verification-code';

/** Location service */
export const API_DIVISIONS =
  API_BASE_PUBLIC_SERVICE_PATH + '/locations/divisions';
export const API_DISTRICTS =
  API_BASE_PUBLIC_SERVICE_PATH + '/locations/districts';
export const API_UPAZILAS =
  API_BASE_PUBLIC_SERVICE_PATH + '/locations/upazilas';

export const API_PUBLIC_STATIC_PAGE_BLOCKS =
  API_BASE_PUBLIC_SERVICE_PATH + '/static-contents/';
