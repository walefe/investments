import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  max-width: 900px;
  padding: 30px;
  margin: 80px auto;
  border-radius: 4px;
  box-shadow: 3px 6px 15px rgba(0, 0, 0, 0.6);
  background: #fff;

  h1 {
    text-align: center;
  }
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 300px;

  h4 {
    color: #444444;
    font-weight: bold;
  }

  button {
    background: linear-gradient(-120deg, #c850c0, #ffcc70);
    width: 640px;
    max-width: 100%;
    border: 0;
    padding: 10px 15px;
    margin-top: 15px;
    margin-left: 100px;
    border-radius: 4px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
  }
`;
