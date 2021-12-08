import axios from 'axios';

const baseURL = window.location +'api/v1/greetings/random';

export const getGreeting = async () => {
  const greeting = await axios.get(baseURL)
    .then((res) => {
      const result = res.data;
      return result;
    });
  return greeting;
};
