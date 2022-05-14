import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { slideData } from "./slideData";

import {
  Arrow,
  Button,
  Container,
  Description,
  Image,
  ImgContainer,
  InfoContainer,
  Slide,
  Title,
  Wrapper,
} from "./sliderStyled";

const Slider = () => {
  const handleClick = direction;
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        {slideData.map((data) => {
          return (
            <Slide key={data.id} bg={data.bg}>
              <ImgContainer>
                <Image src={data.img} alt="slide-1" />
              </ImgContainer>
              <InfoContainer>
                <Title>{data.title}</Title>
                <Description>{data.description}</Description>
                <Button>{data.button}</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
