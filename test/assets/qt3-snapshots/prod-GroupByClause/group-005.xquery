for $x in //employee
let $key := $x/hours
group by $key
return <group hours="{
    $key
  }" avHours="{
    avg($x/hours)
  }"/>
