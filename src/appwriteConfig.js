import { Client } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('68d3133e001e9cdbe2da'); // You'll need to set this in your Appwrite project

export { client };
