<?php 
/* Compilateur LessPHP */
require './lessphp/lessc.inc.php';

try {
	lessc::ccompile('./css/styles.less', './css/styles.css');
} catch (exception $ex) {
	exit('lessc fatal error:
			'.$ex->getMessage());
}
?>
<!doctype html>
<html lang="fr">
	<head>
		<title>NEW PROJECT</title>
		<meta charset="utf-8">
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<meta name="author" content="" />
		<meta name="copyright" content="©" />
		<meta http-equiv="Content-Language" content="fr-FR" />
		<link rel="icon" href="favicon.ico" />
		<link rel="icon" type="image/png" href="favicon.png" />
		
		<link rel="stylesheet" href="./css/styles.css" type="text/css" />
	</head>
	<body>

		<script src="./js/jquery-1.10.2.min.js" language="javascript" type="text/javascript"></script>
		<!-- script src="./js/jquery-proximcreation-1.0.0.js" language="javascript" type="text/javascript"></script-->
		<script src="./js/scripts.js" language="javascript" type="text/javascript"></script>
	</body>
</html>