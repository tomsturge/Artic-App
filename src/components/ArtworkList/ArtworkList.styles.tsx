import { styled } from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0 2rem;
  padding: 0;
  display: grid;
  justify-content;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1rem;
`;

export const ListItem = styled.li`
  background-color: #202020;
  border: 1px solid #707070;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
  }

  img {
    width: calc(100% - 2rem);
    height: 18rem;
    object-fit: contain;
    margin: auto;
    padding: 0.5rem;
    display: block;
  }
`;

export const NoImage = styled.p`
  height: 20rem;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Title = styled.p`
  border-top: 1px solid #707070;
  width: calc(100% - 2rem);
  text-align: center;
  padding: 0.5rem 1rem 0.25rem;
  margin: 0;
`;

export const Artist = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  color: #a0a0a0;
`;

export const Pagination = styled.div`
  display: flex;
  margin: 4rem auto;
  width: fit-content;
  gap: 1rem;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`;
