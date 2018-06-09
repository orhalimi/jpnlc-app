import axios from 'axios';
import config from '../confige/dev';

export const getAvailableForms = async () => {
  const availableForms = await axios.get(`${config.serverUrl}/available_forms`);
  return availableForms;
};

