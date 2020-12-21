import styled from 'services/Theme';

export const Wrapper = styled.div`
  background: ${props => props.theme.backgrounds.lightGray};
  min-height: 100vh;
`;

export const Title = styled.div`
  font-size: 56px;
  font-weight: 600;
  line-height: 64px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export const Content = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 25px 0 #f4f4f4;
  background-color: #ffffff;
`;

