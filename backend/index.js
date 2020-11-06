const express = require('express');

const app = express();


app.get('/',(req, res)=>{
    res.json({irra:"Irrá"});
})

app.listen(3333);

