import express, { application } from 'express';
import bodyParser from 'body-parser';
import mongoose  from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';
import homeRouter from './routes/home.js'; 

const app = express();
app.use(bodyParser.json({limit:"20mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb", extended:true}));
app.use(cors());

app.use('/students', studentRoutes);
app.use('/', homeRouter);

const CONNECTION_URL = 'mongodb+srv://skillsBuild:123password@cluster0.d8c9b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT  || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
    console.log(`connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

