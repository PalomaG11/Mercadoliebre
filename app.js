const express = require('express'); 
 const app = express();
 const path=require('path');

 app.use(express.static('public'));

 app.listen(process.env.PORT || 4000, () => (console.log ("servidor corriendo")));

app.get('/', (req,res) =>res.sendFile(path.join(__dirname,'/views/home.html')));

app.get('/register', (req,res) =>res.sendFile(path.join(__dirname,'/views/register.html')));

app.post('/register', (req,res) =>res.sendFile(path.join(__dirname,'/views/home.html')));

app.get('/login', (req,res) =>res.sendFile(path.join(__dirname,'/views/login.html')));

app.post('/login', (req,res) =>res.sendFile(path.join(__dirname,'/views/home.html')));

