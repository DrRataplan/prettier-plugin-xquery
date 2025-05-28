<out>{
    for $x in //employee
    let $key := $x/empnum
    group by $key
    order by count($x) , $key
    return <group count="{
          count($x)
        }"> {
          string-join($x/@name, "|")
        } </group>
  }</out>
