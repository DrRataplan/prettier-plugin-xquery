for $x in xs:string(zero-or-one((1 to 10)[. mod 2 = -1]))
return tokenize($x, ",")
