let $f := function ($x as xs:double*) {
    for-each($x, round#1)
  }
return $f((1.2345, 6.789))
