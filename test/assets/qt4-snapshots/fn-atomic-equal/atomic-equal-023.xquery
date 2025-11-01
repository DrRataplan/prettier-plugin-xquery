let $values := ("abc", "def", "xyz")
return every
    $i in
    1 to 3, $j in
    1 to 3 satisfies
    ($i eq $j) eq atomic-equal($values[$i], xs:untypedAtomic($values[$j]))
