declare variable $n external;

<out>
  {
    for $x as xs:integer allowing empty at $p in 1 to $n,
      $y as xs:integer? allowing empty at $q in ($x + 1) to $n
    return <a p="{ $p }" q="{ $q }">{ $x },{ $y }</a>
  }
</out>
