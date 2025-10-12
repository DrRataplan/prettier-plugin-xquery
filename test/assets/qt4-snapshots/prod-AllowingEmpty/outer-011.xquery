declare variable $n external;

<out>
  {
    for $x allowing empty at $p in 1 to $n,
      $y allowing empty at $q in ($x + 1) to $n
    return <a p="{ $p }" q="{ $q }">{ $x },{ $y }</a>
  }
</out>
