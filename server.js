var express		= require('express'),
    app			= express(),
    bodyParser	= require('body-parser');

app.use(bodyParser());

var port = process.env.PORT || 8080;

// rotas da API
var router = express.Router();

router.get('/', function(req, res) {
	res.json({ message: 'Waib Tecnologias - API'});
});

// registrando as rotas
app.use('/api', router);

// iniciando servidor
// =============================
app.listen(port, function(){
	console.log('Servidor na porta '+ port);
})