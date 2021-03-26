// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*export const environment = {
  production: false,
  authEndpoint: 'http://gprd-auth-dev:1337/auth.service/auth',
  profileEndpoint: 'http://gprulcw720978z:80/SharePoint.Service/api/profile',
  apiEndpoint: 'http://localhost:1337/api',
  crEndpoint:
    'http://ir-proxy.abbvienet.com/proxy/qsdi/v1/search?format=json&options=qsdi-options',
  userSettingsEndpoint: ''
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
export const environment = {
  production: false,
  crEndpoint:'http://ir-proxy.abbvienet.com/proxy/qsdi/v1/search?format=json&options=qsdi-options',
  userSettingsEndpoint: '',
  dataService: 'http://localhost:52397/api',
  serviceApiHost: 'https://dreamland.abbvienet.com/data-services/dashboard20/services/data',
  generateUserDetailsTokenUrl:'https://gprd-auth.abbvienet.com:8110/auth.service/auth/token'
  //to create error in login, comment out top https link and use the one below instead
  //  'https://gprd-auth.abbvienet.com:811/auth.service/auth/token',

};
