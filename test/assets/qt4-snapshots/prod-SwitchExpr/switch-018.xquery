let $v := xs:time("00:00:00Z")
return switch ($v)
    case xs:time("24:00:00Z") return
      1
    default return
      2
