import express from "express"
import dotenv from 'dotenv';
import morgan from'morgan';


const app = express()

dotenv.config({ path: './config.env' });

// / Development Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json({ limit: '10kb' }));

// // MOUNTING THE ROUTER
// app.use('/api/v1/users', userRouter);



// SERVER
export default app;
