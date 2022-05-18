import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import logo from "../../images/cart.png";
import { Logo } from "../navBar/navBarStyled";
import {
  Center,
  ContactItem,
  Container,
  Description,
  Left,
  List,
  ListItem,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from "./footerStyled";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <img src={logo} alt="Persie" />
          <h2>PersieStore</h2>
        </Logo>
        <Description>
          We Our aspiration is to become the most trusted institution in Africa
          by setting up world-class standards of business and professional
          behavior with our customers, our partners and our employees. By doing
          so, we wish to not only contribute to the progress and development of
          Africa's economies and societies, but inspire other to do so as well.
        </Description>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook style={{ fontSize: "2.5rem" }} />
          </SocialIcon>
          <SocialIcon color="E4405f">
            <Instagram style={{ fontSize: "2.5rem" }} />
          </SocialIcon>
          <SocialIcon color="ff0000">
            <YouTube style={{ fontSize: "2.5rem" }} />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter style={{ fontSize: "2.5rem" }} />
          </SocialIcon>
          <SocialIcon color="0081cf">
            <LinkedIn style={{ fontSize: "2.5rem" }} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "1rem ", fontSize: "2.5rem" }} />
          123, Shagamu-Ikorodu Road, Lagos-State Nigeria
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "1rem ", fontSize: "2.5rem" }} />
          +234 703 146 1676
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "1rem ", fontSize: "2.5rem" }} />
          ahachi.john@outlook.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
