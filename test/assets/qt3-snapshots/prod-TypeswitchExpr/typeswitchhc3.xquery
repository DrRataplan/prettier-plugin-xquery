typeswitch (5.1E2)
  case $i as xs:integer return
    <wrap>test failed2</wrap>
  case $i as xs:double return
    <wrap>test passed - 5.1E2 is a double type</wrap>

  default return
    <wrap>test failed</wrap>
