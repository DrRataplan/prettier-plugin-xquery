for $i in 1 to 7
return let $d2 := $d + xs:dayTimeDuration("P1D") * $i
  return let $abb := format-date($d2, "[FNn,3-4]", "en", (), ())
    return let $expected := ("Mon", "Tues", "Weds", "Thur", "Fri", "Sat", "Sun")
      return (
        substring($abb, 1, 3),
        starts-with($expected[$i], $abb) and
          string-length($abb) le 4 and
          string-length($abb) ge 3
      )
