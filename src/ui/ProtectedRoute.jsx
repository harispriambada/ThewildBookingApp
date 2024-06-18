import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  //1. load autheticated user
  const { isLoading, isAuthenticated } = useUser();

  //2. if there is No authenticated user, redirect to the login
  //untuk call navigate tidak boleh di top level

  useEffect(
    function () {
      if (!isAuthenticated && isLoading) navigate("/login");
    },
    [isLoading, navigate, isAuthenticated]
  );

  //3. while loading ,show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. id there is authenticated user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
