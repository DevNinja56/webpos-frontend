import Cookies from "js-cookie";

export const getToken = (name = "access_token") => {
  const token = Cookies.get(name);
  return token! ?? null;
};

export const saveToken = async (token: string, name = "access_token") => {
  Cookies.set(name, token, { expires: 365 * 10 });
};
