typeswitch (1, 2, 3)
  case $i as node() return
    <e />
  case xs:integer* return
    $i

  default return
    true()
