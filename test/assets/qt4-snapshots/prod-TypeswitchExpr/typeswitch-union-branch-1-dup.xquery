typeswitch (47)
  case $i as xs:integer|xs:string return
    $i
  case $i as xs:integer return
    $i

  default return
    0
