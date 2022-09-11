import {startCase as lodashStartCase} from 'lodash';
import {getBrowserCookie} from '../keycloak/cookieInstance';
import {COOKIE_KEY_INSTITUTE_ID} from '../shared/constants/AppConst';
import {PROFILE_SETUP_KEYS} from '../common/constants';
import URL from 'url';
import {
  GENDER,
  UserTypeCode,
  UserTypesValue,
} from '../shared/constants/AppEnums';

export const catchBlockHandler = (error: any, message = '') => {
  throw error;
};

export const range = (total: number, startFrom: number = 0): Array<number> => {
  let items: number[] = [];
  for (let i = startFrom; i <= total; i++) {
    items.push(i);
  }
  return items;
};

export const isResponseSuccess = (response: any) => {
  return response && response._response_status.success;
};

export function camelToWords(str: string) {
  return lodashStartCase(str);
}

function snakeToCamel(str: string) {
  const parts = str.split('_');
  return parts.reduce(function (p, c) {
    return p + c.charAt(0).toUpperCase() + c.slice(1);
  }, parts.shift()!);
}

export function toCamelCase(object: any, exceptions: string[] = []) {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  return Object.keys(object).reduce((p: {[key: string]: any}, key: string) => {
    const newKey = exceptions.indexOf(key) === -1 ? snakeToCamel(key) : key;
    p[newKey] = toCamelCase(object[key]);
    return p;
  }, {});
}

export const getUserTypeByCode = (userTypeCode: string | null) => {
  switch (userTypeCode) {
    case UserTypeCode.YOUTH:
      return UserTypesValue.YOUTH;
    case UserTypeCode.SYSTEM_USER:
      return UserTypesValue.SYSTEM_USER;
    case UserTypeCode.CONTENT_PROVIDER:
      return UserTypesValue.CONTENT_PROVIDER;
    case UserTypeCode.RECRUITER:
      return UserTypesValue.RECRUITER;
    case UserTypeCode.TRAINER:
      return UserTypesValue.TRAINER;
    default:
      return UserTypesValue.YOUTH;
  }
};

export const courseDuration = (duration: number) => {
  let dh = 0;
  let dm = 0;

  if (duration / 60 < 1) {
    return (duration || 0) + ('min' as string);
  } else {
    dm = duration % 60;
    dh = Math.floor(duration / 60);
    return (dh || 0) + 'hr' + ' ' + (dm || 0) + ('min' as string);
  }
};

export const totalEnrolled = (num_of_enrollments: number) => {
  let thousands = 0;
  let million = 0;
  let hundreds = 0;

  if (num_of_enrollments / 1000 < 1) {
    return num_of_enrollments || 0;
  } else if (
    num_of_enrollments / 1000 > 1 &&
    num_of_enrollments / 1000 < 1000
  ) {
    thousands = num_of_enrollments / 1000;
    hundreds = num_of_enrollments % 1000;
    hundreds = Math.floor(hundreds / 1000);
    return (thousands || 0) + (hundreds || 0) + 'K';
  } else if (num_of_enrollments / 1000000 >= 1) {
    million = num_of_enrollments / 1000000;
    thousands = num_of_enrollments % 1000000;
    thousands = Math.floor(thousands / 1000000);
    return (million || 0) + (thousands || 0) + 'M';
  }
};

export const objectFilter = (object: any) => {
  Object.keys(object).forEach((key) => {
    if (!object[key]) {
      delete object[key];
    }
  });

  return object;
};

export const getHostUrl = () => {
  return typeof window !== 'undefined' && window?.location?.origin
    ? window.location.origin
    : '';
};

const fbRegex1 = /\/videos\/([\w\-]*?)\//;
const fbRegex2 = /\/videos\/([\d]*?)\//;
const fbReplace = '/videos/';

export const getYoutubeUrl = (url: any) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  const id = match && match[2].length === 11 ? match[2] : null;

  return `https://www.youtube.com/embed/${id}`;
};

export const getFacebookUrl = (url: any) => {
  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    url.replace(
      fbRegex1,
      url.replace(fbRegex1, fbReplace) == url.replace(fbRegex2, fbReplace)
        ? '/videos/$1'
        : fbReplace,
    ),
  )}&width=500&height=280&show_text=false&appId`;
};

export const getVimeoUrl = (url: any) => {
  const vimeoRegex = /(?:vimeo)\.com.*(?:videos|video|channels|)\/([\d]+)/i;
  const parsed = url.match(vimeoRegex);

  return '//player.vimeo.com/video/' + parsed[1];
};

export const getEmbeddedVideoUrl = (video_url: any) => {
  const domain = URL.parse(video_url);
  if (domain.host == 'www.youtube.com') {
    return getYoutubeUrl(video_url);
  } else if (domain.host == 'www.facebook.com') {
    return getFacebookUrl(video_url);
  } else if (domain.host == 'vimeo.com') {
    return getVimeoUrl(video_url);
  } else {
    return null;
  }
};

export const getInstituteIdByDomain = (cookies?: any) => {
  return cookies && cookies?.institute_id
    ? cookies.institute_id
    : getBrowserCookie(COOKIE_KEY_INSTITUTE_ID) || 40;
};

export const getErrorObject = (id: any, errorInstance: any) => {
  const keyArray = id
    .replaceAll('.', ',')
    .replaceAll('[', ',')
    .replaceAll(']', '')
    .split(',');
  let errorObj = errorInstance;
  keyArray.forEach((key: string) => {
    errorObj = errorObj?.[key];
  });
  return errorObj;
};
export const getCalculatedSerialNo = (
  index: number,
  page: number | null | undefined,
  size: number | null | undefined,
) => {
  return page && size ? page * size + (index + 1) : index + 1;
};
export const paramsBuilder = (extraParams: any) => {
  let params = '';
  if (extraParams) {
    Object.keys(extraParams).forEach((key, index) => {
      if (index) {
        params += '&';
      }
      params += key + '=' + extraParams[key];
    });
  }

  return params;
};
export const updateProfileLink = (data: any) => {
  let {
    basic_skills,
    specialized_skills,
    youth_education,
    youth_interest,
    area_of_aspiration_id,
  } = data;
  if (!youth_education) {
    return PROFILE_SETUP_KEYS.EDUCATIONAL_LEVEL;
  } else if (!youth_interest) {
    return PROFILE_SETUP_KEYS.INTEREST;
  } else if (!basic_skills || !specialized_skills) {
    return PROFILE_SETUP_KEYS.SKILL_MAPPING;
  } else if (!area_of_aspiration_id) {
    return PROFILE_SETUP_KEYS.ASPIRE_TO_BE;
  }
  return PROFILE_SETUP_KEYS.EDUCATIONAL_LEVEL;
};
export const genderWiseDefaultProfileImage = (gender: any) => {
  let male_image = '/images/youth/profile.jpg';
  let female_image = '/images/youth/profile_female.jpg';
  let other_image = '/images/youth/other_image.png';
  if (gender == GENDER.MALE) {
    return male_image;
  } else if (gender == GENDER.FEMALE) {
    return female_image;
  } else if (gender == GENDER.OTHER) {
    return other_image;
  }
  return '';
};
