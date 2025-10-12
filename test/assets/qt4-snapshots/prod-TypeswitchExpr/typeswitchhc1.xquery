typeswitch (5)
  case $i as xs:integer return
    <wrap>test passed - integer data type</wrap>
  case $i as xs:date return
    <wrap>test failed</wrap>
  case $i as xs:time return
    <wrap>test failed</wrap>
  case $i as xs:string return
    <wrap>test failed</wrap>

  default return
    <wrap>test failed</wrap>
