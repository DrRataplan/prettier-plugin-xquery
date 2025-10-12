typeswitch (xs:error(1))
  case xs:error return
    fn:true()

  default return
    false()
