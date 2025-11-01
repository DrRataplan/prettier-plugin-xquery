let $keys := (
  xs:untypedAtomic("abc"),
  xs:string("abc"),
  xs:anyURI("abc"),
  xs:string("xyz"),
  xs:untypedAtomic("xyz")
)
return every
    $i in
    1 to 5, $j in
    1 to 5 satisfies
    (atomic-equal($keys[$i], $keys[$j]) eq (($i lt 4) eq ($j lt 4)))
