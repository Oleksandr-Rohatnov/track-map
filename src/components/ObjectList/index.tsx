import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import {getAuthKeyFromLocalStorage} from "../../helpers/localStorage";
import {observer} from "mobx-react-lite";
import store from "../../store/store";

const ObjectList = observer(() => {
  const navigate = useNavigate();
  const authKeyFromLocalStorage = getAuthKeyFromLocalStorage();

  useEffect(() => {
    if (!authKeyFromLocalStorage) {
      navigate("/login");
    }
  }, [authKeyFromLocalStorage, navigate]);

  useEffect(() => {
    store.getObjects();
  }, []);

  console.log(store.objects)

  return (
    <div>
      <h1>Object List</h1>
      <ul>
        {/*{objects?.map((obj: any) => (*/}
        {/*  <li key={obj.id}>*/}
        {/*    ID: {obj.id}, Coordinates: ({obj.coordinates.lat}, {obj.coordinates.lng})*/}
        {/*  </li>*/}
        {/*))}*/}
      </ul>
    </div>
  );
});

export default ObjectList;