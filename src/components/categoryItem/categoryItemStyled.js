import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 60vh;
  position: relative;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  color: white;
  margin-bottom: 1rem;
`;
export const Button = styled.button`
  border: none;
  padding: 1rem;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;
