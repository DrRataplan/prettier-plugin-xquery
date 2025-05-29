<result>{
  for sliding window $w in ./stream/event
    start $s when $s/direction eq "in"
    only end $e when $s/person eq $e/person and $e/direction eq "out"
  return <working-time>
      {
        $s/person
      }
      <time>{
        xs:dateTime($e/@time) - xs:dateTime($s/@time)
      }</time>
  </working-time>
}</result>
