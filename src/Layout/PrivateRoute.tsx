import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScreenLoader from "../Components/common/ScreenLoader";
import { ROUTES } from "../Contstent/url-endpoints";
import { useUserAuth } from "../Context";
import Layout from "./index";

const PrivateRouteLayout = () => {
  const { isAuthenticated, isLoading, verifyAuth } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    verifyAuth?.();
    setTimeout(() => {
      if (!isLoading && !isAuthenticated && isAuthenticated !== null) {
        navigate(ROUTES.AUTH.LOGIN);
      }
    }, 1000);
  }, [isAuthenticated, isLoading, navigate, verifyAuth]);

  if (isLoading) return <ScreenLoader />;

  return <>{isAuthenticated ? <Layout /> : <ScreenLoader />}</>;
};

export default PrivateRouteLayout;
