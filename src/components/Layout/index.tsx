import React from 'react'
import classes from './Layout.module.scss'
import { useLocation } from "react-router-dom";

export const Layout = ({ children }: React.PropsWithChildren) => {
  const location = useLocation(); // Отримуємо поточне місцезнаходження
  const isLoginPage = location.pathname === '/login';
  return (
    <div className={classes.root}>
      {!isLoginPage && <div>Header</div>}
      {children}
    </div>
  )
}