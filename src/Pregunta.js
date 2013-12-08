function Respuesta(intento, correcto) {
	this.intento = intento;
	this.correcto = correcto;
};

Respuesta.prototype.esCorrecta = function() {
	return (this.intento == this.correcto);
}

function Pregunta(a, b) {
  this.a = a || Math.floor((Math.random()*10)+1);
  this.b = b || Math.floor((Math.random()*10)+1);
  this.r = this.a * this.b;
};

Pregunta.prototype.enunciado = function() {
    return this.a + ' x ' + this.b + ' = ';
};

Pregunta.prototype.responder = function(respuesta) {
	return new Respuesta(this.r, respuesta);
};

