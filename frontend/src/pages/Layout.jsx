import { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import GlobalContext from '../components/GlobalContext';
import React from 'react';
import Error from "../components/Error";
const Layout = () => {
  const [status, setStatus] = useState("");
  const [user, setUser] = useState();
  const [items, setItems] = useState([]);
  const [pastItems, setPastItems] = useState([]);
  const globalContextValue = useMemo(() => {
    return {
      user,
      setUser,
      setStatus,
      items,
      setItems,
      pastItems,
      setPastItems
    };
  }, [user,items,pastItems]); 
  const generatekey = () => {
    return Math.random();
  };
  return(
    <GlobalContext.Provider value={globalContextValue}>
      <Box> 
        <Outlet/>
        {status ? (
          <Error key={generatekey()} open={status.open} severity={status.severity} message={status.msg} />
        ) : null}
      </Box>
    </GlobalContext.Provider>
  )
};

export default Layout;