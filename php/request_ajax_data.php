<?php

if (isset($_POST['name']) && isset($_POST['number'])) {
	$result = array(
		'name' => $_POST["name"],
		'number' => $_POST["number"]
	);

	echo json_encode($result);
}