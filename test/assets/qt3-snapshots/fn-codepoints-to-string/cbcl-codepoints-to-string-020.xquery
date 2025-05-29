for $x in 65 to 75
return boolean(codepoints-to-string($x[. mod 2 = 0] to ($x + 9)[. mod 2 = 0]))
