declare variable $n external;

<out>
  {
    for $x allowing empty in 1 to $n
    return <a>{ $x }</a>
  }
</out>
