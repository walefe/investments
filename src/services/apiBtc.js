import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=BRL&apikey=DPBX3YA8PLGREZ26',
});

export default api;
