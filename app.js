const express = require('express');
const path = require('path');
const mainRouter = require('./routers/mainRoutes');
const productRouter = require('./routers/productRoutes');
const userRouter = require('./routers/userRoutes');


const app = express();

app.use(express.static('public'))


// ROUTERS
app.use(mainRouter);
app.use(productRouter);
app.use(userRouter);

app.listen(3000, () => {
    console.log(`Escuchando http://localhost:3000`);
});