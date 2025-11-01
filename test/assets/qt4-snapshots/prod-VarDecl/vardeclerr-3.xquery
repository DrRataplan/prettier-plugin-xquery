declare variable $var1 := function ($x as xs:numeric) as xs:numeric {
  if (($x) lt 0) then
    $var1($x)
  else
    abs($x)
};

$var1(2)
