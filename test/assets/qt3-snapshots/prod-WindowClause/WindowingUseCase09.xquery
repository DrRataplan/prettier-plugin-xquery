<result>{
    for sliding window $w in ./stream/event
      start $s when $s/direction eq "in"
      only end $e when $s/person eq $e/person and $e/direction eq "out"
    let $person := $s/person
    let $workingTime := xs:dateTime($e/@time) - xs:dateTime($s/@time)
    group by $person
    order by $person
    return <working-time>
    <person>{
            $person
          }</person>
    <time>{
            sum($workingTime)
          }</time>
  </working-time>
  }</result>
