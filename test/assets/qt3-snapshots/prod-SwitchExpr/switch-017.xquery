let $v := current-dateTime()
return switch ($v)
  case xs:dateTime("2001-01-01T12:00:00") return
    1
  default return
    2
