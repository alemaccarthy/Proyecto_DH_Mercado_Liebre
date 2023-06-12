const express = require('express');
const path = require('path');
const mainRouter = require('./routers/mainRoutes');
const productRouter = require('./routers/productRoutes');
const userRouter = require('./routers/userRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, '/views/products'),
    path.join(__dirname, '/views/user'),
])

app.use(express.static('public'));


// ROUTERS
app.use(mainRouter);
app.use('/products', productRouter);
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log(`Escuchando http://localhost:3000`);
});