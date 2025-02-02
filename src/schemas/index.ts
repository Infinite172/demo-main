export type LoginResponse = {
  access_token: string;
  refresh_token: string;
};

export type Role = 'AD' | 'US';

export type SubDomain = {
  domain: 'string';
  role: Role;
};

export type Token = {
  token_type: 'access' | 'refresh';
  exp: number;
  iat: number;
  jti: string;
  user_id: string;
  sub_domains: SubDomain[];
};
