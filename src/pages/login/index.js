import React from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
} from "../register/registerStyled";
import { Link } from "./loginStyled";

const Login = () => {
  return (
    <div>
      <Container>
        <Wrapper
          style={{
            width: "25%",
          }}
        >
          <Title>SIGN IN</Title>
          <Form style={{ display: "flex", flexDirection: "column" }}>
            <Input style={{ margin: "1rem 0" }} placeholder="username" />
            <Input
              style={{ margin: "1rem 0" }}
              type="password"
              placeholder="password"
            />
          </Form>
          <Button>LOGIN</Button>
          <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Login;
