import axios from 'axios';
import { HOST_PREFIX } from './index.js';

const API_NAME = 'task';

export default {
  findAll() {
    return axios.get(`${HOST_PREFIX}/${API_NAME}/`);
  },
};