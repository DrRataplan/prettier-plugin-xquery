declare default element namespace "http://www.w3.org/XQueryTestOrderBy";

for $i in 1 to 100
order by -$i
count$count
let $e := <e i="{
    $i
  }" pos="{
    $count
  }"/>
order by number($e/@i)
where $count gt 90
return $e!@pos!number()
