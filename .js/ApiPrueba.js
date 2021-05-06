$(document).ready(function(){

	var indicadores = {
		dolar: 0,
		euro: 0,
		utm: 0,
		uf: 0,
	}

	//var dolar, euro, utm, uf

	$.ajax({
		url: 'http://www.mindicador.cl/api',
		method: 'GET'
	}).done(function(data){
		console.log(data); //esto venia con el ejemoplo
		indicadores.dolar = data.dolar.valor,
		indicadores.euro = data.euro.valor,
		indicadores.utm = data.utm.valor,
		indicadores.uf = data.uf.valor,

		$(".uf__text").append("$" + indicadores.uf);
		$(".dolar__text").append("usd$" + indicadores.dolar);
		$(".utm__text").append(indicadores.utm);
		$(".euro__text").append("$" + indicadores.euro);
	});

	

	
	$('.dolar__button').on('click', function(e) {
		var input = parseInt( $('.dolar__input').val() );
		$('.dolar__answer').text( input / indicadores.dolar );
		$('.dolar__input').val('');
	});

	

	$('.euro__button').on('click', function(e) {
		var input = parseInt( $('.euro__input').val() );
		$('.euro__answer').text( input / indicadores.euro );
	});


	$('.utm__button').on('click', function(e) {
		var input = parseInt( $('.utm__input').val() );
		$('.utm__answer').text( input / indicadores.utm );
	});


	$('.uf__button').on('click', function(e) {
		var input = parseInt( $('.uf__input').val() );
		$('.uf__answer').text( input / indicadores.uf  );

	});

	$('[class$="__reset"]').on('click', function(){
		$(this).prev().prev().prev().val('');
		$(this).prev().text('');
	});
	


});
