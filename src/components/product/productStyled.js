import styled from "styled-components";

export const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
`;
export const Container = styled.div`
  flex: 1;
  margin: 0.5rem;
  min-width: 28rem;
  height: 35rem;
  display: flex;
  background-color: #f5fbfd;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
export const Circle = styled.div`
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
export const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

export const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: white;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  transition: all 0.4s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.3);
  }
`;
