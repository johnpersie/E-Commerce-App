import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import { Circle, Container, Icon, Image, Info } from "./productStyled";

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined style={{ fontSize: "2rem" }} />
        </Icon>
        <Icon>
          <SearchOutlined style={{ fontSize: "2rem" }} />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined style={{ fontSize: "2rem" }} />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
