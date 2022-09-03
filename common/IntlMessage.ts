import {createIntl, createIntlCache} from 'react-intl';

/**
 * TODO: if we can get the current locale from store, then use it.
 */
// @ts-ignore
import bnMessages from '/shared/localization/locales/bn_BD.json';

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();

// Create the `intl` object
const intl = createIntl(
  {
    // Locale of the application
    locale: 'bn',
    // Locale of the fallback defaultMessage
    defaultLocale: 'bn',
    messages: bnMessages,
  },
  cache,
);
export default intl;
