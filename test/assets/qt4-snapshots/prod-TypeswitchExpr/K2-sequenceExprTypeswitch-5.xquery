typeswitch (1, 2, 3)
  case node() return
    $i
  case $i as xs:integer return
    1

  default return
    true()
