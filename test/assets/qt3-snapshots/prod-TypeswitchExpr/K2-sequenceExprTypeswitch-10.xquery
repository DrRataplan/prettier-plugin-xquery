typeswitch (1, 2, 3)
  case node() return
    <e/>
  case $i as xs:integer return
    3

  default return
    1,
$i
