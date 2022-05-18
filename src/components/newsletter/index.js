import { Send } from "@mui/icons-material";
import React from "react";
import {
  Button,
  Container,
  Description,
  Input,
  InputContainer,
  Title,
} from "./newsletterSyled";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely update from your favourite products.</Description>
      <InputContainer>
        <Input placeholder="your email" />
        <Button>
          <Send style={{ fontSize: "2rem" }} />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
