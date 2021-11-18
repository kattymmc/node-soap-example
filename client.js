
var soap = require('soap');
var url = 'http://localhost:8000/wsdl?wsdl';

// Creando el cliente
soap.createClient(url, function (err, client) {
  if (err){
    throw err;
  }
  /* 
  * Parametros del servicio
  */
  var args = {
    message: "id1:12:34:56:out42",
    splitter: ":"
  };
  // Llamando al servicio
  client.MessageSplitter(args, function (err, res) {
    if (err)
      throw err;
    console.log(res); 
  });
});
