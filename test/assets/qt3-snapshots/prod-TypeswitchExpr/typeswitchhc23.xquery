typeswitch (1)
  case $i as xs:double return
    <wrap>test failed</wrap>
  case $i as xs:integer return
    5 * 2
  case $i as xs:string return
    <wrap>test failed</wrap>

  default return
    <wrap>test failed</wrap>
