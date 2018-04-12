<?php
$en = array(
	'welcome' => array(
		'comercial' => array(
			'header' => 'multi',
			'title' => 'important for your day',
			'subtitle' => 'business'
		),
		'consumer' => array(
			'header' => 'multi',
			'title' => 'useful in your day',
			'subtitle' => 'private'
		)
	)
);

$json_data = json_encode($en);
file_put_contents('en.json', $json_data);