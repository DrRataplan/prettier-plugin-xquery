<out>
  {
    for $x in 1 to 5
    for $y in 1 to 5
    count$index
    where $index mod 3 = 0
    return <item><x>{ $x }</x><y>{ $y }</y><index>{ $index }</index></item>
  }
</out>
