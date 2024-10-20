import React, { JSX } from 'react'
import ObjectList from "../components/ObjectList";
import Login from "../components/Login";

export type RouteT = {
  id: number;
  path: string;
  element: () => JSX.Element;
};

export const routes: RouteT[] = [
  {
    id: 1,
    path: '/',
    element: ObjectList,
  },
  {
    id: 2,
    path: '/login',
    element: Login,
  },
];

export default routes;