<out>
  {
    let $times := ("-10:00", "-05:00", "Z", "+05:30", "+13:00")!xs:dateTime(
      "2018-01-01T12:00:00" || .
    )
    for $f in ("[H00]:[m00] [ZN]")
    return <time format="{ $f }">
      {
        for $t in $times
        return <s>{ format-dateTime($t, $f, (), (), "America/New_York") }</s>
      }
    </time>
  }
</out>
