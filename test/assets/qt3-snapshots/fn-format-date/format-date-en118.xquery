for $i in 1 to 7
return let $d2 := $d + xs:dayTimeDuration("P1D") * $i
  return let $abb := format-date($d2, "[FNn,3-5]", "en", (), ())
    return let $expected := (
        "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"
      )
      return (
        substring($abb, 1, 3),
        starts-with($expected[$i], $abb) and
          string-length($abb) le 5 and
          string-length($abb) ge 3
      )
