import { Route, Routes } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import Layout from 'layouts/layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/actions';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import HomePage from 'pages/HomePage/HomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import AboutPage from 'pages/AboutPage/AboutPage';
import { Spinner } from './App.styled';
import { Circles } from 'react-loader-spinner';
import UserPage from 'pages/UserPage/UserPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Spinner>
      Refreshing user...
      <Circles
        height="60"
        width="60"
        color="#ff8a05"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Spinner>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute redirectTo="/contacts" component={<HomePage />} />
          }
        />
        <Route
          path="/about"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<AboutPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute redirectTo="/login" component={<UserPage />} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      <Route
        path="/register"
        element={
          <RestrictedRoute
            redirectTo="/contacts"
            component={<RegisterPage />}
          />
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
        }
      />
    </Routes>
  );
};
