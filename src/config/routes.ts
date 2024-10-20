import React, { JSX } from 'react'
import ObjectList from "../components/ObjectList";
import Login from "../components/Login";

export type RouteT = {
  id: number;
  path: string;
  element: () => JSX.Element;
  isLayoutEnabled: boolean;
};

export const routes: RouteT[] = [
  {
    id: 1,
    path: '/',
    element: ObjectList,
    isLayoutEnabled: true,
  },
  {
    id: 2,
    path: '/login',
    element: Login,
    isLayoutEnabled: false,
  },
];

export default routes;