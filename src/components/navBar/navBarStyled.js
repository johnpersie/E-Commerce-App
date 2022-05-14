import styled from "styled-components";

export const Container = styled.div`
  height: 6rem;
`;
export const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
`;
export const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 5rem;
  }
  h2 {
    font-weight: 800;
  }
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Language = styled.span`
  font-size: 1.4rem;
  cursor: pointer;
`;
export const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 2.5rem;
  padding: 0.5rem;
`;
export const Input = styled.input`
  border: none;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const MenuItem = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  margin-left: 2.5rem;
`;
