ordered{
  typeswitch (123)
    case $i as xs:string return
      ("a", "b", "c")
    case $i as xs:double return
      ("a", "b", "c")
    case $i as xs:integer return
      (1, 2, 3, 4)

    default return
      ("a", "b", "c")
}
