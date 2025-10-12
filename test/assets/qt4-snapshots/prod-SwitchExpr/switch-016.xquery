let $v := xs:dateTime("2001-01-01T12:00:00")
return switch ($v)
    case current-dateTime() return
      1
    default return
      2
