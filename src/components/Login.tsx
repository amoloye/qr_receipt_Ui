import React, { useState } from "react";
import styled from "styled-components";
import { Typography, Input, Button } from "antd";

import { Spacer } from "./Spacer";

export const Login = () => {
  const { Title, Text, Link } = Typography;
  const [isSignup, setIsSignup] = useState(false);

  // function registerNewUser() {
  //   return axios
  //     .post("/user", {
  //       firstName: "Fred",
  //       lastName: "Flintstone",
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  return (
    <Card>
      <Title level={3}>
        {isSignup ? "Create your qrApp account" : "Welcome Back"}
      </Title>
      <div>
        {!isSignup && <Text>New to qrApp?</Text>}{" "}
        <Link onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? "Login " : "Sign up"}
        </Link>
      </div>
      <Spacer />
      {isSignup ? (
        <>
          <div>
            <Input placeholder="username" />
          </div>
          <Spacer />
          <div>
            <Input placeholder="email" />
          </div>
          <Spacer />
          <div>
            <Input placeholder="store name" />
          </div>
          <Spacer />
          <div>
            <Input placeholder="password" />
          </div>
        </>
      ) : (
        <>
          <div>
            <Input placeholder="ade" />
          </div>
          <Spacer />
          <div>
            <Input placeholder="******" />
          </div>
        </>
      )}
      <Spacer size="l" />
      <Button>{isSignup ? "Sign Up" : "Login"}</Button>
    </Card>
  );
};

const Card = styled.div`
  margin: auto 0;
  min-width: 300px;
  min-height: 400px;
  border: 1px solid #d3d3d3;
  border-radius: 20px;
  padding: 20px;
`;
