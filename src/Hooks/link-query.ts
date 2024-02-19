import { useNavigate } from "react-router-dom";
import { useQueryParams } from "./get-query";

export const useLinkQuery = () => {
  const prevQuery = useQueryParams();
  const navigate = useNavigate();

  return (path: string, query: { [type: string]: string }) => {
    const allQueryParams = { ...prevQuery, ...query };
    navigate(
      `${path}?${Object.entries(allQueryParams)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")}`
    );
  };
};
