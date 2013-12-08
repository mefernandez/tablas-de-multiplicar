var p = null;

function preguntar() {
	p = new Pregunta();
	$('#respuesta')[0].value = '';
    $('#pregunta').text(p.enunciado());
    $('#pregunta').focus();
}

$(function() {
	preguntar();
	resultadosTablas();
});

function comprobar(form) {
	var r = form.respuesta.value;
	if(r == p.r) {
		$('#historial').append('<div class="respuesta-correcta">' + p.enunciado() + r + '&#09;&#10003;</div>');
		$('#cuantas-bien')[0].value++;
		$( "#estado" ).html('&#10003;');
		$( "#form-pregunta" ).effect( 'highlight', {color: 'green'}, 500, function() {$( "#estado" ).text('?');});
		$('#resultados-tabla-' + p.a).append('<div class="respuesta-correcta">' + p.enunciado() + r + '&#09;&#10003;</div>');
	} else {
		$('#historial').append('<div class="respuesta-incorrecta">' + p.enunciado() + r + '&#09;&#10005;</div>');
		$('#cuantas-mal')[0].value++;
		$( "#estado" ).html('&#10005;');
		$( "#form-pregunta" ).effect( 'highlight', {color: 'red'}, 500, function() {$( "#estado" ).text('?');});
		$('#resultados-tabla-' + p.a).append('<div class="respuesta-incorrecta">' + p.enunciado() + r + '&#09;&#10003;</div>');
	}
	preguntar();
}

function resultadosTablas() {

	for (var i=1; i<=10; i++) {
		$('#resultados-tablas ul').append('<li id="resultados-tabla-' + i + '" class="resultados-tabla"><input type=checkbox id="check-tabla-' + i + '" checked><h2>Tabla del ' + i + '</h2></li>');
	}
}