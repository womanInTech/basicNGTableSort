/*export const environment = {
  production: true,
  authEndpoint: 'http://gprd-auth:8010/auth.service/auth',
  profileEndpoint: 'http://ws.abbvienet.com/sharepoint.service/api/profile',
  apiEndpoint: 'http://localhost:1337/api',
  crEndpoint:
    'http://ir-proxy.abbvienet.com/proxy/qsdi/v1/search?format=json&options=qsdi-options',
  userSettingsEndpoint: ''
};
*/

export const environment = {
  production: true,
  dataService:
    'https://dreamland.abbvienet.com/data-services/dashboard20/services/data/api',
  generateUserDetailsTokenUrl:
    'https://gprd-auth.abbvienet.com:8110/auth.service/auth/token',
};
