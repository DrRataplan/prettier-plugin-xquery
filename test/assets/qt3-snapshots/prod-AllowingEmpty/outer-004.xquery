declare variable $n external;

<out>{
    for $x in 1 to $n
    return <a position="{
          $p
        }">{
          $x
        }</a>
  }</out>
