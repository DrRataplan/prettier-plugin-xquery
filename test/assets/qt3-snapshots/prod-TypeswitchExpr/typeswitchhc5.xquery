typeswitch (1267.43233E12)
  case $i as xs:string return
    <wrap>test failed</wrap>
  case $i as xs:integer return
    <wrap>test failed</wrap>
  case $i as xs:double return
    <wrap>test passed - 1267.43233E12 is a double type</wrap>

  default return
    <wrap>test failed</wrap>
