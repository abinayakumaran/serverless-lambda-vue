import * as dotenv from 'dotenv';
dotenv.config();

export default {
  APP: process.env.APP || 'development',
  PORT: process.env.PORT || '3000',
  DB_URL: process.env.DB_HOST || 'mongodb+srv://admin:admin@cluster0-qebqj.mongodb.net/test?retryWrites=true&w=majority',
};
