typeswitch (47)
  case $i as xs:string|xs:integer return
    $i
  case $i as xs:integer return
    $i

  default return
    0
