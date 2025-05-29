typeswitch (xs:integer(47))
  case $i as xs:decimal|xs:integer return
    $i

  default return
    0
