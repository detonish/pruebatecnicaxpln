var body = {
    'idOp' : "", //opId
    'tasa' : "", //tasa modificada
    'email' : "" //email donde se enviará el correo
}

function onEdit(e) {
console.log(e)
if (e) {
   var body = {
    'idOp' : e.idOp, //opId
    'tasa' : e.tasa, //tasa modificada
    'email' : e.email//email donde se enviará el correo
} 
 var options = {
'method' : 'post',
'contentType': 'application/json',
// Convert the JavaScript object to a JSON string.
'payload' : JSON.stringify(body)
};
UrlFetchApp.fetch('https://hooks.zapier.com/hooks/catch/6872019/oahrt5g/', options);
}

}
// onEdit();