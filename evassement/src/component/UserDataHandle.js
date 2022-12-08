import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {userAction} from '../redux/actions/userAction';
import User from "./User";
import { Spinner,Wrapper } from "./style";


const UserDataHandle = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.userData);
  const { loading, users, error } = userData;
  useEffect(() => {
    dispatch(userAction())
  }, [dispatch]);

  //const invokeUser=useMemo(()=>users)

  useEffect(() => {
    if(!loading){
    saveJSON('userData',users);
    setLoacalSTData(loadJSON('userData'));}
  }, [loading,users]);

const [,setLoacalSTData]=useState()

  const saveJSON =async (key,data)=>{
    const loacalData = await data
    localStorage.setItem(key,JSON.stringify(loacalData))
  }
  const loadJSON = async (key)=>{
   const storageData = await JSON.parse(localStorage.getItem(key))
   return storageData
  }
  const refreshHandler = () => {
    dispatch(userAction());
  };
  return (
    <>
      {loading ? (
        <Wrapper> <Spinner/></Wrapper>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <User users={users} refreshHandler={() => refreshHandler()}  />
      )}
    </>
  );
};
export default UserDataHandle;
