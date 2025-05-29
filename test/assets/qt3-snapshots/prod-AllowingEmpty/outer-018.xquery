declare variable $n external;

<out>{
  for $x as xs:integer? in 1 to $n
  for $y as xs:integer? in
    (
      if (empty($x)) then (
      ) else (
        1 to $x
      )
    )
  where deep-equal($x, $y)
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
