<out>
  {
    for $x in 1 to 2
    for $y in 1 to 3
    let $index := $y
    count$index
    return <item><x>{ $x }</x><y>{ $y }</y><index>{ $index }</index></item>
  }
</out>
