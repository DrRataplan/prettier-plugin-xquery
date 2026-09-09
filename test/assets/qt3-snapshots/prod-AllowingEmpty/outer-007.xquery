declare variable $m as xs:integer external := 5;

declare variable $n as xs:integer external := 5;

<out>
  {
    for $x allowing empty at $p in 1 to $m, $y at $q in 1 to $n
    return <a p="{ $p }" q="{ $q }">{ $x },{ $y }</a>
  }
</out>
