declare variable $n external;

<out>
  {
    for $x allowing empty at $p in 1 to $n
    return <a position="{ $p }">{ $x }</a>
  }
</out>
