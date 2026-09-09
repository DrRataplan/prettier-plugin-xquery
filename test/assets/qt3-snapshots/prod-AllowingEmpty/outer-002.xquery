declare variable $n as xs:integer external := 0;

<out>
  {
    for $x allowing empty in 1 to $n
    return <a>{ $x }</a>
  }
</out>
