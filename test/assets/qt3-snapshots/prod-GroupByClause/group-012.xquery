<out>{
  for $x in //employee[age > 300]
  let $key := @gender
  group by $key
  return <group gender="{
      $key
    }"> {
      for $e in $x
      return <person>{
          $e/@name/string()
        }</person>
    } </group>
}</out>
