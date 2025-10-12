let $v := xs:date("2001-01-01")
return switch ($v)
    case $v return
      1
    default return
      2
