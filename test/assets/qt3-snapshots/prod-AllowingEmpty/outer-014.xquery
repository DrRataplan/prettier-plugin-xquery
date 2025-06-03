declare variable $n external;

<out>
  {
    for $x as xs:integer in 1 to $n
    for $y as xs:integer? in ($x + 1) to $n
    return <a p="{
          $p
        }" q="{
          $q
        }">{
          $x
        },{
          $y
        }</a>
  }
</out>
