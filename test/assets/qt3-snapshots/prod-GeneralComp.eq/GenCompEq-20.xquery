declare variable $p external := xs:untypedAtomic("000504e0");

$p = (1 to xs:integer(xs:double($p)))
