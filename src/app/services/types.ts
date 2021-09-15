export type USER = {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};

type SUPPORT = {
  text: string;
  url: string;
};

export type USERS_RESPONSE = {
  data: USER[];
  page: number;
  per_page: number;
  support: SUPPORT;
  total: number;
  total_pages: number;
};
