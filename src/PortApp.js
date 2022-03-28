import React, { useEffect } from "react";

import { LoadingScreen } from "./components/load/LoadingScreen";
import { AppRouter } from "./routers/AppRouter";
import { setLoadOff } from "./reducers/actions/background";
import { useDispatch, useSelector } from "react-redux";

export const PortApp = () => {
  const { loading } = useSelector(state => state.bg)
  const { email } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadOff(email))
  }, [dispatch, email])

  return <>{loading ? <LoadingScreen /> : <AppRouter />}</>;
};
