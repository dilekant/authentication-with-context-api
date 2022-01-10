import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {UserContext} from '../contexts/UserContext';
import {BASE_URL} from '../config';

export function useGet(endpoint, initialValue = []) {
  const token = useContext(UserContext);
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${endpoint}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(({data}) => {
        console.log(data.data);
        setData(data.data);
      });
  }, [token, endpoint]);
  return data;
}
