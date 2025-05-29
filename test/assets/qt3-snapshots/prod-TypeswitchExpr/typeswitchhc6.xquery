typeswitch (1 > 2)
  case $i as xs:string return
    <wrap>test failed</wrap>
  case $i as xs:integer return
    <wrap>test failed</wrap>
  case $i as xs:boolean return
    <wrap>test passed - 1 > 2 is a boolean type</wrap>

  default return
    <wrap>test failed</wrap>
