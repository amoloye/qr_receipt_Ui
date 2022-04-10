import React from "react";
import "./App.css";

import { Layout, Typography } from "antd";
import { Login } from "./components/Login";
import { Spacer } from "./components/Spacer";
import styled from "styled-components";
import { ProductForm } from "./components/ProductForm";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <JustDiv>
          <Typography.Title> Qr App</Typography.Title>
        </JustDiv>
        <Spacer size="l" />
        <ContentWrapper>
          <Login />
        </ContentWrapper>
        <Spacer size="m" />
        <JustDiv $padding>Footer</JustDiv>
        <Spacer />
        <ProductForm />
      </Layout>
    </div>
  );
};

export default App;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  align-text: center;
  margin: 0 auto;
`;

const JustDiv = styled.div<{ $padding?: boolean }>`
  display: flex;
  justify-content: center;
  align-text: center;
  padding: ${(props) => (props.$padding ? "40px" : "20px")};
  background-color: #d3d3d3;
`;
