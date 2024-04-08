import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import { AppError } from '@shared/errors/appError';
import { router } from './routes';
import cors from 'cors';
import '../../container';
import '../../container/providers';

const app = express();


// // If you have more origins you would like to add, you can add them to the array below.
// const allowedOrigins = ['http://10.0.0.100'];

// const options: cors.CorsOptions = {
  
// };
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.use(express.json());
app.use("/tmp", express.static("tmp"));
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({
    status: 'error',
    message: `Internal server - ${err.message}`,
  });
});

app.listen(3333, () => console.log('Server is running⭐️🚀🚀'));
