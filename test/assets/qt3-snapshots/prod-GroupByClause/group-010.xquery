<out>{
    for $x in //employee
    let $key :=
      if ($x/@gender = "male") then
        number("NaN")
      else
        42
    group by $key
    return <group count="{
          count($x)
        }" key="{
          $key
        }" />
  }</out>
