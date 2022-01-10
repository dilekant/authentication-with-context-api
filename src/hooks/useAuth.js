import React, {useEffect, useReducer} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '../config';
import {createAction} from '../utils/createAction';
import {sleep} from '../utils/sleep';

export function useAuth() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            user: {...action.payload},
          };
        case 'REMOVE_USER':
          return {
            ...state,
            user: undefined,
          };
        case 'SET_LOADING':
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
      loading: true,
    },
  );

  const auth = React.useMemo(
    () => ({
      login: async (email, password) => {
        const data = await axios.post(`${BASE_URL}/api/auth/local`, {
          identifier: email,
          password,
        });
        const user = {
          email: data.data.user.email,
          token: data.data.jwt,
        };
        await storeData('user', user);
        dispatch(createAction('SET_USER', user));
      },
      logout: async () => {
        await storeRemoveItem('user');
        dispatch(createAction('REMOVE_USER'));
      },
      register: async (email, password) => {
        await sleep(2000);
        await axios.post(`${BASE_URL}/api/auth/local/register`, {
          username: email,
          email: email,
          password: password,
        });
      },
    }),
    [],
  );

  const storeRemoveItem = async key => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  };

  const storeData = async (key, value) => {
    try {
      value = JSON.stringify(value);
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
  };

  async function getItem() {
    let user = await AsyncStorage.getItem('user');
    if (user != null) {
      user = JSON.parse(user);
      dispatch(createAction('SET_USER', user));
    }
    dispatch(createAction('SET_LOADING', false));
  }

  useEffect(() => {
    sleep(2000).then(() => {
      getItem();

      return () => {
        console.log('This will be logged on unmount');
      };
    });
  }, []);

  return {auth, state};
}
