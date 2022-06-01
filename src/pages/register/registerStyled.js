import styled from "styled-components";
import Register from "../../images/register.jpg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${Register});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 40%;
  padding: 2rem;
  background-color: white;
`;
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const Input = styled.input`
  flex: 1;
  margin: 2rem 1rem 0 0;
  min-width: 40%;
  padding: 1rem;
`;
export const Agreement = styled.span`
  font-size: 1.2rem;
  margin: 2rem 0;
`;
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1.5rem 2rem;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 1rem;
`;
