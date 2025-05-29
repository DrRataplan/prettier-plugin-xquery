let $f := function ($a as xs:integer, $b as xs:integer) as xs:integer {
    data(<a>{
          $a
        }{
          $b
        }</a>)
  }
return $f(12, 34)
