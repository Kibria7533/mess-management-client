export enum ThemeStyle {
  MODERN = 'modern',
  STANDARD = 'standard',
}

export enum ThemeStyleRadius {
  MODERN = 30,
  STANDARD = 4,
}

export enum ThemeMode {
  LIGHT = 'light',
  SEMI_DARK = 'semi-dark',
  DARK = 'dark',
}

export enum LayoutType {
  FULL_WIDTH = 'full-width',
  BOXED = 'boxed',
}

export enum NavStyle {
  DEFAULT = 'default',
  MINI = 'mini',
  MINI_SIDEBAR_TOGGLE = 'mini-sidebar-toggle',
  STANDARD = 'standard',
  HEADER_USER = 'user-header',
  HEADER_USER_MINI = 'user-mini-header',
  DRAWER = 'drawer',
  BIT_BUCKET = 'bit-bucket',
  H_DEFAULT = 'h-default',
  HOR_LIGHT_NAV = 'hor-light-nav',
  HOR_DARK_LAYOUT = 'hor-dark-layout',
}

export enum FooterType {
  FIXED = 'fixed',
  FLUID = 'fluid',
}

export enum HeaderType {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum RouteTransition {
  NONE = 'none',
  FADE = 'fade',
  SLIDE_LEFT = 'slideLeft',
  SLIDE_RIGHT = 'slideRight',
  SLIDE_UP = 'slideUp',
  SLIDE_DOWN = 'slideDown',
}

export enum Fonts {
  LIGHT = 300,
  REGULAR = 400,
  MEDIUM = 500,
  BOLD = 700,
}

export enum AuthType {
  /**
   * @deprecated
   */
  FIREBASE = 'firebase',
  /**
   * @deprecated
   */
  AWS_COGNITO = 'aws_cognito',
  /**
   * @deprecated
   */
  AUTH0 = 'auth0',
  /**
   * @deprecated
   */
  JWT_AUTH = 'jwt_auth',
  AUTH2 = 'auth2.0',
}

export enum UserTypesValue {
  SYSTEM_USER = 'system',
  RECRUITER = 'recruiter',
  CONTENT_PROVIDER = 'content_provider',
  TRAINER = 'trainer',
  YOUTH = 'youth',
}

export enum UserTypeCode {
  SYSTEM_USER = '1',
  CONTENT_PROVIDER = '2',
  YOUTH = '3',
  RECRUITER = '4',
  TRAINER = '5',
}

export enum GENDER {
  MALE = 1,
  FEMALE = 2,
  OTHER= 3,
}
