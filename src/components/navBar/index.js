import { Search, ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import logo from "../../images/cart.png";
import Badge from "@mui/material/Badge";
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper,
} from "./navBarStyled";

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <img src={logo} alt="Persie" />
            <h2>PersieStore</h2>
          </Logo>
        </Left>
        <Center>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "1.6rem" }} />
          </SearchContainer>
        </Center>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartCheckoutOutlined style={{ fontSize: "2.5rem" }} />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
