import axios from 'axios';
import config from '../config/config';

export const getAvailableForms = async () => {
  const availableForms = await axios.get(`${config.apiPath}/available_forms`);
  return availableForms;
};

