<?php

$test1 = 'this is a test';
$arr = array('num1' => 1, 'num2' => 2,'num3' => 3,'num4' => 4,'num5' =>5);

foreach ($arr as $key => $val) {
	echo $key++;
}
echo $test1;
?>