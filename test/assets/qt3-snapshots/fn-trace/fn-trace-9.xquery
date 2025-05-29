for $var1 in (2, 4, 6, 8), $var2 in (3 + $var1) - (4 * $var1)
return fn:trace($var1 + $var2, "The Value of $var 1 + $var2 is: ")
