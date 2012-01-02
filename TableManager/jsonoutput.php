<?php

switch (param('action')) {
	case 'remove':
		echo json_formated(TRUE);
		break;
	default:
		$ola = array(
			array('id' => '1', 'name' => 'Joselito Silveira', 'age' => '22', 'sex' => 'm', 'published' => '1', 'datetime' => '2011-12-23 17:44:43'),
			array('id' => '2', 'name' => 'Maria Maya', 'age' => '54', 'sex' => 'f', 'published' => '0', 'datetime' => '2011-12-23 17:48:13'),
			array('id' => '3', 'name' => 'Chaves da Vila', 'age' => '8', 'sex' => 'm', 'published' => '1', 'datetime' => '2011-12-23 17:48:24')
		);
		echo json_formated($ola);
		break;
}

/**
 * Simple
 * 
 * @param string Name of param to take from $_POST or $_GET
 * @return string 
 */
function param($name) {
	if (isset($_POST[$name])) {
		return htmlspecialchars($_POST[$name]);
	} elseif (isset($_GET[$name])) {
		return htmlspecialchars($_GET[$name]);
	} else {
		return NULL;
	}
}
/**
 * Simple formated json_encode output
 *
 * @param type $object
 * @return $formatedJSON json_encode formated
 */
function json_formated($object) {
	$formatedJSON = json_encode($object);
	$formatedJSON = str_replace(',',",\n\t", $formatedJSON);
	$formatedJSON = str_replace('{',"{\n\t", $formatedJSON);
	$formatedJSON = str_replace('}',"\n}", $formatedJSON);
	return $formatedJSON;
	
	//return str_replace(array(',"', '{', '}'), array(",\n\t\"", "{\n\t", "\n}"), $json);
}

/*
 $pattern = array(',"', '{', '}');
 $replacement = array(",\n\t\"", "{\n\t", "\n}");
 echo str_replace($pattern, $replacement, $string);

 * ?>
 */
