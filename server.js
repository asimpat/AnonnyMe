import dotenv from 'dotenv';
import db from './config/db'
import app from './app'

dotenv.config({ path: './config.env' });


const port = process.env.PORT 
db();
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
});
