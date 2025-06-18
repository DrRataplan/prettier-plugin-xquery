<out>
  {
    let $times := ("-10:00", "-05:00", "Z", "+05:30", "+13:00")!xs:dateTime(
      "2018-07-01T12:00:00" || .
    )
    for $f in ("[ZN]")
    return <time format="{ $f }">
        {
          for $t in $times
          return <s>{ format-dateTime($t, $f, (), (), "us") }</s>
        }
      </time>
  }
</out>
