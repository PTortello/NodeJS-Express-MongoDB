const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');

const url = config.bd_string;
const options = { useUnifiedTopology: true, poolSize: 5, useNewUrlParser: true };

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', function(err) {
    console.log('Erro na conexão com o banco de dados: ' + err);
});

mongoose.connection.off('disconnected', function() {
    console.log('Aplicação desconectada do banco de dados!');
});

mongoose.connection.on('connected', function() {
    console.log('Aplicação conectada ao banco de dados!');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');

app.use('/', indexRoute);
app.use('/users', usersRoute);

porta = 3000;
app.listen(porta);
console.log('localhost conectado na porta ' + porta);
console.log('Aguardando conexão com o banco de dados...');

module.exports = app;
