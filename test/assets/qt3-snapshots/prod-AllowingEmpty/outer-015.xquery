declare variable $n external;

<out>
  {
    for $x as xs:integer? allowing empty at $p in 1 to $n
    for $y as xs:integer at $q in
      (
        if (empty($x)) then
          0
        else (
          1 to $x
        )
      )
    return <a p="{ $p }" q="{ $q }">{ $x },{ $y }</a>
  }
</out>
