import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import { slideData } from "../../data";

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
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined style={{ fontSize: "3rem" }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideData.map((data) => (
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
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined style={{ fontSize: "3rem" }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
