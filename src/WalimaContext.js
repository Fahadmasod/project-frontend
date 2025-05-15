import React, { createContext, useState, useEffect } from 'react';
import { base_url } from './envirment';

export const WalimaContext = createContext();

export const WalimaProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchGroups = async () => {
    debugger
    setLoading(true);
    try {
      const response = await fetch(`${base_url}/api/saveddatas`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);



    useEffect(() => {
    fetchGroupsnikha();
  }, []);

  const fetchGroupsnikha = async () => {
    debugger
    setLoading(true);
    try {
      const response = await fetch(`${base_url}/apii/saveddata1`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setErrorMessage(err.message);
      setLoading(false);
    }
  };

  return (
    <WalimaContext.Provider value={{ data, setData, loading, errorMessage, fetchGroups,setLoading,setErrorMessage,setData ,fetchGroupsnikha}}>
      {children}
    </WalimaContext.Provider>
  );
};
