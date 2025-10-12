typeswitch (xs:integer(47))
  case $i as xs:decimal|xs:integer return
    $i
  case $i as xs:decimal return
    $i

  default return
    0
