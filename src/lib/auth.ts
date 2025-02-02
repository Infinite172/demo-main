import {
  CookieValueTypes,
  deleteCookie,
  getCookie,
  setCookie,
} from 'cookies-next';
import dayjs from 'dayjs';
import { jwtDecode } from 'jwt-decode';

import { LoginResponse, Token } from '@/schemas';

import env from './env';

// Gets expiry date
export const expDate = (date: number) => dayjs.unix(date).toDate();

// get Token
export const getToken = (type: 'refresh_token' | 'access_token') =>
  getCookie(type);

// Decode access and refresh token on type safe way
export const decodeToken = (token: string) => {
  const decoded: Token = jwtDecode(token);
  return decoded;
};

// Get user schema based on token
export const getUserSubDomains = (token: Token) => token.sub_domains;

// Sets token for the user
export const setToken = (res: LoginResponse) => {
  try {
    const { access_token, refresh_token } = res;

    // Decode access and refresh token
    const decodedAccessToken: Token = decodeToken(access_token);
    const decodedRefreshToken: Token = decodeToken(refresh_token);

    // Set session on cookie
    setCookie('access_token', access_token, {
      expires: expDate(decodedAccessToken.exp),
      domain: env.cookieDomain,
    });

    // Set session on cookie
    setCookie('refresh_token', refresh_token, {
      expires: expDate(decodedRefreshToken.exp),
      domain: env.cookieDomain,
    });
  } catch (error) {
    // continue regardless of error
  }
};

// Set user schema on cookie
export const setUserSchema = (
  domain: CookieValueTypes,
  role: CookieValueTypes,
  exp: Date,
) => {
  if (domain && role) {
    setCookie('domain', domain, {
      expires: exp,
      domain: env.cookieDomain,
    });
    setCookie('role', role, {
      expires: exp,
      domain: env.cookieDomain,
    });
  }
};

// Deletes all auth related cookie
export const deleteAuthCookies = () => {
  deleteCookie('access_token', { domain: env.cookieDomain });
  deleteCookie('refresh_token', { domain: env.cookieDomain });
  deleteCookie('role', { domain: env.cookieDomain });
  deleteCookie('domain', { domain: env.cookieDomain });
  localStorage.removeItem('notificationId');
};

// Checks whether token is valid or not for authenticated user
export const isTokenValid = (token: string) => {
  const session: Token = jwtDecode(token);
  const loggedIn = session && session.exp && session.user_id && true;
  if (loggedIn && session) {
    if (Date.now() > session.exp * 1000) {
      deleteCookie('access_token');
      deleteCookie('refresh_token');
      return false;
    }
    return true;
  }

  return false;
};

// Checks whether user is authenticated or not
export const isAuthenticated = () => {
  const token = getCookie('refresh_token');
  if (token && isTokenValid(token)) {
    return true;
  }
  return false;
};

// gets current user role and domain
export const getCurrentSubDomain = () => {
  const domain = getCookie('domain');
  const role = getCookie('role');

  if (domain && role) {
    return { domain, role };
  }

  return { domain: null, role: null };
};

// checks if there is subdomain or not
export const isSubDomain = (url: string) =>
  !!url.match(
    /^(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+)([a-zA-Z]{2,})$/,
  );
