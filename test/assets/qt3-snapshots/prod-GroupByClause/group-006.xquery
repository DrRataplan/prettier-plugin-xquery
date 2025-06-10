<out>{
  for $x in //employee
  group by $key := $x/status
  return <group count="{
        count($x)
      }" status="{
        $key
      }" />
}</out>
