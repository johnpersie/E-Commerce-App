import styled from "styled-components";
export const Container = styled.div`
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const Description = styled.p`
  margin: 2rem 0;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  justify-content: center;
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;

export const Center = styled.div`
  flex: 1;
  padding: 2rem;
`;
export const Title = styled.h3`
  margin-bottom: 3rem;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 1rem;
`;

export const Right = styled.div`
  flex: 1;
  padding: 2rem;
`;
export const ContactItem = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`;
export const Payment = styled.img``;
