typeswitch (<e />, <e />)
  case $b as element() return
    concat("", $b treat as element())

  default return
    1
