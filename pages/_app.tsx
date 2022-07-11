import '../styles/globals.css'
import '../styles/mathquill.css'
import type { AppProps } from 'next/app'
import SSRProvider from 'react-bootstrap/SSRProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { teal } from '@mui/material/colors';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { createContext, useCallback, useEffect, useState } from 'react';
config.autoAddCss = false
import data from './../data/data';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(59,117,162,0.93)',
    },
    secondary: {
      main: '#67cbbd',
    },
    background: {
      paper: 'rgba(241,241,245)',
    },
  },
})

interface completedActivities {
  name: string;
  gradeName: string;
}

interface userObject {
  name: string;
  email: string;
  token: string;
  password: string;
  loginError: string;
  completedActivities: completedActivities[]
}

export const userObject: userObject = {
  name: '',
  email: '',
  token: '',
  password: '',
  loginError: '',
  completedActivities: []
}

export const UserContext = createContext({
  userObject,
  createAccount: async (name: string, email: string, password: string) => { },
  login: async (email: string, password: string) => { },
  pushCompletedActivity: async (token: string, email: string, grade: string, activityName: string, userObject: userObject) => { },
  logout: async (token: string) => { },
  updateCompletedActivities: async () => { }
});

function MyApp({ Component, pageProps }: AppProps) {
  const createAccount = async (name: string, email: string, password: string) => {
    const dataResponse = await data.createUser(name, email, password);
    if (dataResponse.hasOwnProperty('error')) {
      setUserState({
        ...userState,
        userObject: {
          ...userState.userObject,
          loginError: dataResponse.error
        }
      })
    } else {
      setUserState({
        ...userState,
        userObject: {
          ...userState.userObject,
          email: dataResponse.email,
          token: dataResponse.token,
          name
        }
      })
    }
  }

  const login = async (email: string, password: string) => {
    const dataResponse = await data.loginUser(email, password);
    if (dataResponse.hasOwnProperty('error')) {
      setUserState({
        ...userState,
        userObject: {
          ...userState.userObject,
          loginError: dataResponse.error
        }
      })
    } else {
      setUserState({
        ...userState,
        userObject: {
          ...userState.userObject,
          email: dataResponse.email,
          token: dataResponse.token,
          name: dataResponse.name
        }
      })
    }
  }

  const logout = async (token: string) => {
    data.logoutUser(token);
    setUserState({
      ...userState,
      userObject: {
        name: '',
        email: '',
        token: '',
        password: '',
        loginError: '',
        completedActivities: []
      }
    });
    localStorage.clear();
  }

  const pushCompletedActivity = async (token: string, email: string, grade: string, activityName: string, userObject: userObject ) => {
    await data.pushCompletedActivity(token, email, grade, activityName);
    const activities = await data.getCompletedActivities(token);
    setUserState({
      ...userState,
      userObject: {
        ...userObject,
        completedActivities: activities
      }
    })
  }

  const updateCompletedActivities = async () => {
    if (userState.userObject.token) {
      const activities = await data.getCompletedActivities(userState.userObject.token);
      setUserState({
        ...userState,
        userObject: {
          ...userState.userObject,
          completedActivities: activities
        }
      })
    }
  }

  const [userState, setUserState] = useState<any>({
    userObject,
    createAccount,
    login,
    logout,
    pushCompletedActivity,
    updateCompletedActivities
  });
  const [initalPageLoad, setInitialPageLoad] = useState<boolean>(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { updateCompletedActivities() }, [userState.userObject.token]);

  useEffect(() => {
    if (initalPageLoad) {
      setInitialPageLoad(false);
      const item = localStorage.getItem('user');
      if (item) {
        let { email, name, token } = JSON.parse(item);
        if (email && name && token) {
          setUserState(() => { return { ...userState, userObject: { ...userState.userObject, name, email, token } } });
        }
      }
      // Confirm person is truly logged in and all is well. 
    } else {
      localStorage.setItem('user', JSON.stringify(userState.userObject));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initalPageLoad, userState])

  return <SSRProvider>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={userState}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </ThemeProvider>
  </SSRProvider>
}

export default MyApp
