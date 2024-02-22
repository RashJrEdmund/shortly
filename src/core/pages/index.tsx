/* FILE_DESC +=> ===============================
| Exporting all pages from here to ensure clean |
| Imports in App.tsx.                           |
==================================//===========*/
/* eslint-disable react-refresh/only-export-components */

export * from './auth'; // all Auth pages LoginPage and SignUpPage

export { default as HomePage } from './home/home';

export { default as FeaturePage } from './features/features';

export { default as PricingPage } from './pricing/pricing';

export { default as ResourcePage } from './resources/resources';
