import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { refreshUser } from "../../redux/auth/operations.js";
import { selectIsRefreshing } from "../../redux/auth/selectors.js";
import Layout from "../Layout/Layout.jsx";
import { PrivateRoute } from "../PrivateRoute.jsx";
import { RestrictedRoute } from "../RestrictedRoute.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const RegisterPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage.jsx")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      {isRefreshing ? (
        <strong> Getting user data, please, wait...</strong>
      ) : (
        <Layout>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={<RegisterPage />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={<LoginPage />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    component={<ContactsPage />}
                    redirectTo="/login"
                  />
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      )}
    </>
  );
}

export default App;
