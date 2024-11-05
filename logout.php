<?php 
session_start();

if (isset($_SESSION['username']) || isset($_SESSION['password'])) {
	session_destroy();
	unset($_SESSION['username']);
	unset($_SESSION['password']);

	header("location:../");
}else if (!isset($_SESSION['username']) || !isset($_SESSION['password'])) {
	session_destroy();
	unset($_SESSION['username']);
	unset($_SESSION['password']);

	header("location:../");
}
 ?>