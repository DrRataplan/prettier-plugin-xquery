<result>{
    for sliding window $w in ./stream/event
      start $s when true()
      end next $e when xs:dateTime($e/@time) - xs:dateTime($s/@time) gt
        xs:dayTimeDuration("PT1H")
    where count($w[person eq $s/person and direction eq "in"]) ge 3
    return <alert time="{
          $e/@time
        }">{
          fn:data($s/person)
        } is suspicious</alert>
  }</result>
