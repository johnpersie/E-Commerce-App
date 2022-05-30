import { Add, Remove } from "@mui/icons-material";
import Announcement from "../../components/announcement";
import NavBar from "../../components/navBar";
import {
  Container,
  Desc,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
  Filter,
  FilterContainer,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AmountContainer,
  Amount,
  AddContainer,
  Button,
} from "./productStyled";

const Product = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam
            porro cum! Quam voluptas officiis laudantium. Harum eveniet dolore
            necessitatibus laborum doloribus. Quaerat corporis tempore at illo
            sapiente alias ex.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="blue" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ fontSize: "2.5rem" }} />
              <Amount>1</Amount>
              <Add style={{ fontSize: "2.5rem" }} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <></>
    </Container>
  );
};

export default Product;
