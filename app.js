const express = require('express');
const app = express();
const PORT = 7000;

const URI = `mongodb://127.0.0.1:27017/blog_db`;

// const blogRoutes = require('./Routes/blog-route');
const userRouter = require('./Routes/user-route');

const { initDB } = require('./config/dbConfig');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    res.send('Welcome to blog. This is home route')
})

// app.use('/api/v1/blog', blogRoutes);
app.use('/api/v1/user', userRouter);

app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`)
    initDB(URI)
})