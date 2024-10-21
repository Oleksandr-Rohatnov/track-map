import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthKeyFromLocalStorage } from '../../helpers/localStorage';
import { observer } from 'mobx-react-lite';
import store from '../../store';
import Header from '../../components/Header';
import Map from '../../components/Map';

const Main = observer(() => {
  const { objectStore, authStore } = store;
  const navigate = useNavigate();
  const authKeyFromLocalStorage = getAuthKeyFromLocalStorage();

  useEffect(() => {
    if (!authKeyFromLocalStorage && !authStore.authKey) {
      navigate("/login");
    }
  }, [authKeyFromLocalStorage, navigate, authStore.authKey]);

  useEffect(() => {
    objectStore.getObjects();
  }, []);

  // console.log(objectStore.objects);

  return (
    <>
      <Header/>
      <Map/>
    </>
  );
});

export default Main;
