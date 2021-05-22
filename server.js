const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/eveControl'));

app.get('/*', (req, res) =>{
    res.sendFile(__dirname + + '/dist/eveControl/index.html');
});



app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
})