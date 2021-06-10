const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const { authRouter, userRouter } = require('./src/routes');

const { ErrorMiddleware: { pathNotFound, errorHandler }, AuthMiddleware } = require('./src/middlewares');

const port = process.env.PORT;

const corsOptions = {
    origin: `http://localhost:${port}`,
};

const app = express();

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/auth', authRouter);

app.use(AuthMiddleware);

app.use('/users', userRouter);

app.use(pathNotFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started listening on port ${port}`);
});
