import { Client } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('YOUR_PROJECT_ID'); // You'll need to set this in your Appwrite project

export { client };
