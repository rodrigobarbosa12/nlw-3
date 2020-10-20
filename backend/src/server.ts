import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors'; // Para exibir os erros
import routes from './routes';
import './database/connection';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/** Configuração para dar acesso as imagens */
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(errorHandler);

app.listen(3333, () => console.log('Servidor rodando!'));
