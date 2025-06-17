<out>
  {
    let $times :=
      ("-10:00", "-05:00", "Z", "+05:30", "+13:00")!xs:time("12:00:00" || .)
    for $f in ("[ZN]")
    return <time format="{ $f }">
        {
          for $t in $times
          return <s>{ format-time($t, $f, (), (), "us") }</s>
        }
      </time>
  }
</out>
