declare variable $n external;

<out>
  {
    for $x as xs:integer? in 1 to $n
    for $y as xs:integer in
      (
        if (empty($x)) then
          0
        else (
          1 to $x
        )
      )
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
