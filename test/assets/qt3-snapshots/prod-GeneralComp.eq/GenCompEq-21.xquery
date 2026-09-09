declare variable $p external := xs:untypedAtomic("860302");

(1 to xs:integer($p)) = $p
