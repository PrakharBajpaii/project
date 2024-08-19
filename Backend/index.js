const express = require('express');
const cors = require('cors');
const UserRouter = require('./routers/userRouter');
const OrderRouter = require('./routers/orderRouter');

const app = express();
const port = 5000;

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use(express.json());

app.use('/user', UserRouter);
app.use('/order', OrderRouter);

app.get('/', (req, res) => {
    console.log('response from express');
})

app.listen(port, () => {
    console.log('server started');
})