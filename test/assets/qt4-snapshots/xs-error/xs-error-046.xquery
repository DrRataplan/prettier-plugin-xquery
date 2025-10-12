typeswitch (fn:error())
  case xs:error return
    fn:true()

  default return
    false()
