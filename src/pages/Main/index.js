import React from 'react';
import { useDispatch } from 'react-redux';

import Select from '../../components/Form/Select';
import history from '../../services/history';
import api from '../../services/api';
import apibtc from '../../services/apiBtc';

import {
  addInvestmentTd,
  addInvestmentBt,
} from '../../store/modules/investments/actions';

import { Container, Form } from './styles';

const options = [
  { value: 'Tesouro Direto pré-fixado', label: 'Tesouro Direto pré-fixado' },
  { value: 'Bitcoin', label: 'Bitcoin' },
];
const options1 = [
  { value: '2019', label: '2019' },
  { value: '2020', label: '2020' },
];
const options2 = [
  { value: 'R$ 2.000', label: 'R$ 2.000' },
  { value: 'R$ 10.000', label: 'R$ 10.000' },
];

export default function Main() {
  const dispatch = useDispatch();

  async function handleSubmit(data) {
    const { coin } = data;

    console.log(coin);

    if (coin === 'Tesouro Direto pré-fixado') {
      const { year } = data;

      const invest = await api.get(`/?year_like=${year}`);

      dispatch(addInvestmentTd(invest));

      history.push('/dashboard');
    }

    const invest = await apibtc.get();

    dispatch(addInvestmentBt(invest));

    history.push('/dashboard');
  }

  return (
    <Container>
      <h1>Investments</h1>
      <Form onSubmit={handleSubmit}>
        <h4>Título</h4>
        <Select name="coin" defaultValue="Bitcoin" options={options} />
        <h4>Ano do aporte</h4>
        <Select name="year" options={options1} />
        <h4>Valor</h4>
        <Select name="apport" options={options2} />
        <button type="submit">Buscar</button>
      </Form>
    </Container>
  );
}
