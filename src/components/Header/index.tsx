import React, { useCallback } from 'react';
import classes from './Header.module.scss';
import { observer } from 'mobx-react-lite';
import store from '../../store'

const Header = observer(() => {
  const { authStore} = store;

  const handleLogout = useCallback(() => {
    authStore.logout();
  }, [authStore]);

  return (
    <header className={classes.root}>
      <button className={classes.button} onClick={handleLogout}>
        <img src="/logout.svg" alt="logout" width={24} className={classes.logo} />
      </button>
    </header>
  )
});

export default Header;
