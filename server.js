const express = require('express');
const app = express();

app.get('/login', (req, res) => res.send('f6eb4fb963373658b32251dbd045bf24'));

app.get('/user', (req, res) => {
  if(!req.query){
    res.status(400).send('FAIL NO TOKEN PRESENT');
  } else {
    if(req.query.token === 'f6eb4fb963373658b32251dbd045bf24'){
      res.send('24-02-1970');
    }
    else{
      res.status(400).send('FAIL WRONG TOKEN SENT');
    }
  }
});

app.listen(3008, () => console.log('SERVER RUNNING ON 3008'))