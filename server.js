const express = require('express');
const app = express();

app.get('/login', (req, res) => res.send({token:'f6eb4fb963373658b32251dbd045bf24'}));

app.get('/user', (req, res) => {
  if(req.query && (req.query.token === 'f6eb4fb963373658b32251dbd045bf24')){
    res.send({name:'Test User', dateOfBirth: '24-02-1970'});
  }else{
    res.status(400).send({error:'FAIL NO TOKEN PRESENT'});
  }
});

app.listen(3008, () => console.log('SERVER RUNNING ON 3008'))