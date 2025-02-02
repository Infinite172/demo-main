// import axios, {
//   AxiosHeaders,
//   HeadersDefaults,
//   RawAxiosRequestHeaders,
// } from 'axios';
// import { getCookie } from 'cookies-next';

// import { deleteAuthCookies, setToken } from '@/lib/auth';
// import env from '@/lib/env';
// import { LoginResponse } from '@/schemas';

// import url from '../constant/url';

// const headers:
//   | RawAxiosRequestHeaders
//   | AxiosHeaders
//   | Partial<HeadersDefaults> = {
//   Accept: 'application/json',
//   'content-type': 'application/json; charset=utf-8',
// };

// export const newsLetterHttp = axios.create({
//   baseURL: env.newsletterURL,
//   headers,
// });

// export const registerUserHttp = axios.create({
//   baseURL: env.registerUserURL,
//   headers,
// });

// registerUserHttp.interceptors.request.use(
//   (config) => {
//     const accessToken = getCookie('access_token');
//     const conf = config;
//     if (accessToken) {
//       conf.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// export const authHttp = axios.create({
//   baseURL: env.authBaseUrl,
//   headers,
// });

// authHttp.interceptors.request.use(
//   (config) => {
//     const accessToken = getCookie('access_token');
//     const conf = config;
//     if (accessToken) {
//       conf.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// // Switch user url generate
// export const switchUser = axios.create({ baseURL: env.schoolBaseUrl });

// // Add Bearer token on request
// switchUser.interceptors.request.use(
//   (config) => {
//     const token = getCookie('access_token');
//     const conf = config;
//     if (token) {
//       conf.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// // Tenant based url generate
// const domain = getCookie('domain');
// let baseUrl = env.schoolBaseUrl;
// if (domain) {
//   baseUrl = env.schoolBaseUrl?.replace('school', `${domain}.school`);
// }

// const http = axios.create({ baseURL: baseUrl });

// // Add Bearer token on request
// http.interceptors.request.use(
//   (config) => {
//     const token = getCookie('access_token');
//     const conf = config;
//     if (token) {
//       conf.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// // Rotate refresh token
// http.interceptors.response.use(
//   (res) => res,
//   async (err) => {
//     const originalConfig = err.config;
//     if (
//       err.response?.status === 401 &&
//       err.response.data &&
//       (err.response.data.detail === 'User not found' ||
//         err.response.data.err === 'Device Limit Reached')
//     ) {
//       Promise.reject(err);
//       deleteAuthCookies();
//     }

//     // Incase of same url, prevent refresh token loop
//     if (
//       err.response?.status === 401 &&
//       originalConfig.url === url.auth.refresh
//     ) {
//       window.location.href = '/';
//       return Promise.reject(err);
//     }

//     if (
//       err.response?.status === 401 &&
//       err.response.data.detail !== 'User not found' &&
//       err.response.data.error !== 'Device Limit Reached'
//     ) {
//       const refreshToken = getCookie('refresh_token');

//       // Only proceed when we get refresh token
//       if (refreshToken) {
//         return authHttp
//           .post<LoginResponse>('auth/token/refresh/', {
//             refresh: refreshToken,
//           })
//           .then((res) => {
//             setToken(res.data);

//             http.defaults.headers.common.Authorization = `Bearer ${res.data.access_token}`;
//             originalConfig.headers.Authorization = `Bearer ${res.data.access_token}`;

//             return http(originalConfig);
//           })
//           .catch((error) => {
//             if (error) {
//               deleteAuthCookies();
//               window.location.href = '/';
//             }
//           });
//       }
//       deleteAuthCookies();
//       window.location.href = '/';
//     }

//     // specific error handling done elsewhere
//     return Promise.reject(err);
//   },
// );

// export default http;
