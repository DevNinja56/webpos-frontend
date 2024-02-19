import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ALL_ROUTES } from "./Contstent/url-endpoints";
import PrivateRouteLayout from "./Layout/PrivateRoute";
import NotFound from "./Pages/404";
import UserAuthProvider from "./Context/UserAuthProvider";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserAuthProvider>
          <Routes>
            {ALL_ROUTES.map(({ path, component: Components, isAuth }, index) =>
              isAuth ? (
                <Route key={index} path={path} element={<PrivateRouteLayout />}>
                  <Route key={index} path={path} element={<Components />} />
                </Route>
              ) : (
                <Route key={index} path={path} element={<Components />} />
              )
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserAuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
