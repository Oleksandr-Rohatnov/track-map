import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthKeyFromLocalStorage } from '../../helpers/localStorage';
import { observer } from 'mobx-react-lite';
import store from '../../store';
import Header from '../../components/Header';

const Main = observer(() => {
  const { objectStore} = store;
  const navigate = useNavigate();
  const authKeyFromLocalStorage = getAuthKeyFromLocalStorage();

  useEffect(() => {
    if (!authKeyFromLocalStorage) {
      navigate("/login");
    }
  }, [authKeyFromLocalStorage, navigate]);

  useEffect(() => {
    objectStore.getObjects();
  }, []);

  // console.log(objectStore.objects);

  return (
    <>
      <Header/>
      <h1>Object List</h1>
      <ul>
        {/*{objects?.map((obj: any) => (*/}
        {/*  <li key={obj.id}>*/}
        {/*    ID: {obj.id}, Coordinates: ({obj.coordinates.lat}, {obj.coordinates.lng})*/}
        {/*  </li>*/}
        {/*))}*/}
      </ul>
    </>
  );
});

export default Main;
