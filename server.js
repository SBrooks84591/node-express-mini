const express = require('express');
const helmet = require('helmet');

const userRouter = require('./userRoutes');
const { logger, errorHandler } = require('./middleware');

const server = express();

server.listen(5000, () => {
    console.log('===APP running on port 5000===')
})

server.use(helmet());
server.use(express.json());
server.use(logger());

server.use('./api.users', userRouter);

server.use(errorHandler);