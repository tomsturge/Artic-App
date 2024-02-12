import { styled } from 'styled-components';

export const Wrapper = styled.div`
  background-color: #202020;
  border: 1px solid #707070;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 50rem;
  object-fit: contain;
  margin: 4rem 0 0;
  padding-bottom: 4rem;
  border-bottom: 1px solid #707070;
`;

export const NoImage = styled.p`
  width: 100%;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0 0;
  padding-bottom: 4rem;
  border-bottom: 1px solid #707070;
`;

export const Details = styled.div`
  padding: 2rem;
  max-width: 40rem;
  margin: 0 auto;
`;

export const Meta = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  p {
    margin-bottom: 0;
  }
`;

export const Description = styled.p`
  border-top: 1px solid #707070;
  border-bottom: 1px solid #707070;
  margin-bottom: 2rem;
  padding: 1rem 0;
`;

export const DescriptionList = styled.dl`
  dt {
    font-weight: bold;
    margin: 0 0 0.25rem;
  }

  dd {
    margin: 0 0 1rem;
  }
`;
