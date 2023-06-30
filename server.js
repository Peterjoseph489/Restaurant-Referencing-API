require('./config/configDB.js')
const route = require('./routes/route.js')
PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
app.use(express.json());
app.use('/api', route)


app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.listen(PORT, ()=>{
    console.log(`This app is listening on Port: ${PORT}`);
})