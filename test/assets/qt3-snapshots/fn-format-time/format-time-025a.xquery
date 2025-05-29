<out>{
  let $times :=
    ("-10:00", "-05:00", "Z", "+05:30", "+13:00")!xs:time("12:00:00" || .)
  for $f in
    (
      "[Z]",
      "[Z0]",
      "[Z0:00]",
      "[Z00:00]",
      "[Z0000]",
      "[Z00:00t]",
      "[z]",
      "[ZZ]"
    )
  return <time format="{
      $f
    }">{
      for $t in $times
      return <s>{
          format-time($t, $f)
        }</s>
    }</time>
}</out>
