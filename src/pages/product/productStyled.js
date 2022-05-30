import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 5rem;
  display: flex;
`;
export const ImgContainer = styled.div`
  flex: 1;
`;
export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 5rem;
`;
export const Title = styled.h1`
  font-weight: 200;
`;
export const Desc = styled.p`
  margin: 2rem 0;
`;
export const Price = styled.span`
  font-weight: 100;
  font-size: 4rem;
`;
export const FilterContainer = styled.div`
  width: 50%;
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterTitle = styled.span`
  font-size: 2rem;
  font-weight: 200;
`;
export const FilterColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 0.5rem;
  cursor: pointer;
`;
export const FilterSize = styled.select`
  margin-left: 1rem;
  padding: 0.5rem;
`;
export const FilterSizeOption = styled.option``;
export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
export const Amount = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
`;
export const Button = styled.button`
  padding: 1.5rem;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
`;
