let $v := xs:QName("a")
return switch ($v)
    case $v return
      1
    default return
      2
