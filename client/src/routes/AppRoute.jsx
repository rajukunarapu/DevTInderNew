import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
// import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import PageLoading from "../Components/PageLoading";

const AppRoute = () => {
  // const { isAuthenticated } = useContext(AuthContext);

  const AuthPage = lazy(() => import("../pages/AuthPage"));
  const HomePage = lazy(() => import("../pages/HomePage"));
  const CreatePage = lazy(()=> import("../pages/CreateAccount"))

  // if (isAuthenticated === null) return <PageLoading />;

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route
              path="/"
              element={<AuthPage/>}
            />
            <Route
              path="/feed"
              element={<HomePage />}
            />
            <Route
              path="/onboarding"
              element={<CreatePage />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
