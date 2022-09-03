export const MOBILE_NUMBER_REGEX = new RegExp('^(?:\\+88|88)?(01[3-9]\\d{8})$');
export const PHONE_NUMBER_REGEX = new RegExp('^(?:\\+\\d{1})?[(\\d{4}\\s)]+$');
export const DOMAIN_REGEX = new RegExp(
  '^(http|https):\\/\\/[a-zA-Z-\\-\\.0-9]+$',
);

/**
 * @deprecated
 */
export const TEXT_REGEX_BANGLA = new RegExp(
  "^[\\s-'\u0980-\u09ff\u200d!@#$%^&*)(+=._-]+$",
);
export const TEXT_REGEX_BANGLA_ONLY = new RegExp(
  "^[\\s-'\u0980-\u09ff\u200d!@#$%^&*)(+=._-]+$",
);
export const TEXT_REGEX_ENGLISH_ONLY = new RegExp(
  "^[a-zA-Z0-9\\s'!@#$%^&*)(+=._-]+$",
);
export const TEXT_REGEX_PASSWORD = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,20}$)',
);
export const EMAIL_REGEX = new RegExp(
  '(<|^)[a-z\\d.]+([a-z\\d.\\s_-]{0,30})+@(?:[a-z\\d]+\\.)+([a-z]{2,})(>|$)',
);
export const NID_REGEX = new RegExp('^[0-9]{10}$|^[0-9]{13}$|^[0-9]{17}$');
export const BIRTH_CERTIFICATE_REGEX = new RegExp('^[0-9]{17}$');

export const SPECIAL_CHARACTER_VALIDATION = new RegExp(
  /[$&+,:;=?@#|'<>.^*()%!-]/g,
);
