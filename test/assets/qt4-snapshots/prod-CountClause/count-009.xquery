<out>
  {
    for $x in 1 to 4
    for $y in 1 to 4
    count$index
    let $remainder := $index mod 3
    order by $remainder , $index
    count$index2
    return <item>
        <x>{ $x }</x>
        <y>{ $y }</y>
        <remainder>{ $remainder }</remainder>
        <index2>{ $index2 }</index2>
      </item>
  }
</out>
