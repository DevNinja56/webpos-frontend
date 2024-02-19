import http from ".";

interface fetchRequestTypes {
  url: string;
  type?: "get" | "post" | "patch" | "put" | "delete";
  body?: { [key: string]: unknown };
  query?: { [key: string]: unknown };
  token?: string;
}

export const fetchRequest = async <T>({
  url,
  type = "get",
  body,
  query,
  token,
}: fetchRequestTypes): Promise<T> => {
  let res: T;
  const config: object = token ? { Authorization: `${token}` } : {};

  switch (type) {
    case "get":
      res = await http.get(url, { params: { ...query }, ...config });
      break;
    case "post":
      res = await http.post(url, body, { params: { ...query }, ...config });
      break;
    case "patch":
      res = await http.patch(url, body, { params: { ...query } });
      break;
    case "delete":
      res = await http.delete(url);
      break;
    default:
      throw new Error(`Invalid request type: ${type}`);
  }
  return res;
};
