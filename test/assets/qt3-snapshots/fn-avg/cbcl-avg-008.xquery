typeswitch (fn:avg((xs:float(1), xs:double(2), xs:float(3))))
  case $x as xs:double return
    $x

  default return
    "FAIL"
