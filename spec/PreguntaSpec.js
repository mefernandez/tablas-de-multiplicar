describe("Una Pregunta", function() {
  var pregunta;

  beforeEach(function() {
  });

  it("tiene una respuesta correcta", function() {
    var pregunta = new Pregunta(7, 8);
    var respuesta = pregunta.responder(56);
    expect(respuesta.esCorrecta()).toBe(true);
  });

  it("tiene una respuesta incorrecta", function() {
    var pregunta = new Pregunta(7, 8);
    var respuesta = pregunta.responder(55);
    expect(respuesta.esCorrecta()).toBe(false);
  });

  it("tiene un enunciado", function() {
    var pregunta = new Pregunta(7, 8);
    var enunciado = pregunta.enunciado();
    expect(enunciado).toBe("7 x 8 = ");
  });

});