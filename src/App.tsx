import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import Layout from "./components/layout";
import Home from "./pages/home";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const someRequest = (): Promise<void> => {
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
  };

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".content_ring");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    //
    return null;
  }

  return (
    <StyledComponent>
      <Layout>
        <Home />
      </Layout>
      <NotificationContainer />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
`;

export default App;
