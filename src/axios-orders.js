//jshint esversion:10
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-4b966.firebaseio.com/',
});

export default instance;
