import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../redux/actions/userAction";
import User from "./User";

const UserDataHandle = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.userData);
  const { loading, users, error } = userData;
  useEffect(() => {
    dispatch(userAction());
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      saveJSON("userData", users);
      setLoacalSTData(loadJSON("userData"));
    }
  }, [loading, users]);

  const [, setLoacalSTData] = useState();

  const saveJSON = async (key, data) => {
    const loacalData = await data;
    localStorage.setItem(key, JSON.stringify(loacalData));
  };
  const loadJSON = async (key) => {
    const storageData = await JSON.parse(localStorage.getItem(key));
    return storageData;
  };
  const refreshHandler = () => {
    dispatch(userAction());
  };
  return (
    <>
      
        <User users={users} refreshHandler={() => refreshHandler()} loading={loading} error={error}/>
    </>
  );
};
export default UserDataHandle;
