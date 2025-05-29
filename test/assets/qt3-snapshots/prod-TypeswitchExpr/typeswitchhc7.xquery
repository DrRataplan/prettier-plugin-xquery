typeswitch (xs:date("1999-05-31"))
  case $i as xs:string return
    <wrap>test failed</wrap>
  case $i as xs:integer return
    <wrap>test failed</wrap>
  case $i as xs:date return
    <wrap>test passed - xs:date("1999-05-31")is of date type</wrap>

  default return
    <wrap>test failed</wrap>
