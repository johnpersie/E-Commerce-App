import { Search } from "@mui/icons-material";
import React from "react";
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Right,
  SearchContainer,
  Wrapper,
} from "./navBarStyled";

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
