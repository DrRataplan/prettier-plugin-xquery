typeswitch ((1 to 10)[. mod 2 = 0])
  case xs:integer+ return
    false()

  default return
    true()
