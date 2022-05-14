import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  /* background-color: coral; */
`;
export const Arrow = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #fff7ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "1rem"};
  right: ${(props) => props.direction === "right" && "1rem"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

export const Image = styled.img`
  width: 80%;
  max-width: fit-content;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 5rem;
`;

export const Title = styled.h1`
  font-size: 7rem;
`;

export const Description = styled.p`
  margin: 5rem 0rem;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  background-color: transparent;
  padding: 1rem;
  font-size: 2rem;
  cursor: pointer;
`;
