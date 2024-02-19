import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
  const location = useLocation();

  // Access the search property of the location object, which contains the query string
  const queryParams = new URLSearchParams(location.search);

  // Convert the query parameters into an object
  const queryParamsObject: { [key: string]: string } = {};
  queryParams.forEach((value, key) => {
    queryParamsObject[key] = value;
  });
  return queryParamsObject;
};
