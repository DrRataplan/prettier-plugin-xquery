declare variable $n external;

<out>{
  for $x in 1 to $n, $y in ($x + 1) to $n
  return <a p="{
      $p
    }" q="{
      $q
    }">{
      $x
    },{
      $y
    }</a>
}</out>
