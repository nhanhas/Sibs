<?php
$pt = array(
	'welcome' => array(
		'comercial' => array(
			'header' => 'multi',
			'title' => 'importante para o seu sucesso',
			'subtitle' => 'negócios'
		),
		'consumer' => array(
			'header' => 'multi',
			'title' => 'útil no seu dia',
			'subtitle' => 'particulares'
		)
	)
);

$json_data = json_encode($pt);
file_put_contents('pt.json', $json_data);