import Home from "../Pages/HomePage";
import Login from "../Pages/auth/Login";
import ItemDetail from "../Pages/ItemDetail/ItemDetail";

export const ROUTES = {
  AUTH: {
    LOGIN: "/login",
  },
  HOME: "/",
  ITEM_DETAIL: "/itemDetail"
};

export const ALL_ROUTES = [
  {
    path: ROUTES.AUTH.LOGIN,
    component: Login,
  },
  {
    path: ROUTES.HOME,
    component: Home,
    isAuth: true,
  },
  {
    path: ROUTES.ITEM_DETAIL,
    component: ItemDetail,
    isAuth: true,
  },
];
