import { Client, Environment } from 'square'
const client = new Client({
  environment: Environment.Production,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
});

export default (context, inject) => {
  inject("squareClient", client);
};
