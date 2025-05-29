<out>{
  for $x in //employee
  group by $key:= $x/status
  return <group status="{
      $key
    }" count="{
      count($x)
    }"/>
}</out>
