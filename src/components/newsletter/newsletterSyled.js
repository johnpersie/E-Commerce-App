import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 7rem;
  margin-bottom: 2rem;
`;
export const Description = styled.div`
  font-size: 2.4rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;
export const InputContainer = styled.div`
  width: 50%;
  height: 4rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
export const Input = styled.input`
  border: none;
  flex: 8;
  padding: 0 2rem;
  font-size: 1.5rem;
`;
export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
