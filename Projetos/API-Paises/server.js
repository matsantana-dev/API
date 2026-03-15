const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, function(erro) {
  if (erro) {
    console.log('')
    console.log('==========================================================')
    console.log('')
    console.log(' >> ❌ Erro ao ligar o servidor: ' + erro.message + ' ❌ << ')
    console.log('')
    console.log('==========================================================')
    console.log('')
  } else {
    const date = new Date();
    console.log('')
    console.log('==========================================================')
    console.log('')
    console.log(' >> ✅ Servidor ligado às ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ✅ << ')
    console.log('')
    console.log('==========================================================')
    console.log('')
  }
});