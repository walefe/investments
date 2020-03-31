import React from 'react';
import { Link } from 'react-router-dom';

import Graphics from '../../components/graphics';
import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Graphics />
      <Link to="/">
        <button type="button">Voltar</button>
      </Link>
    </Container>
  );
}
