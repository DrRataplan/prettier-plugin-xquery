typeswitch (<e />)
  case $i as xs:integer|xs:string return
    $i

  default return
    0
