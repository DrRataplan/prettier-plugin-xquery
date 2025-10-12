(
  typeswitch ((1, "a string"))
    case xs:integer return
      -1
    case xs:string return
      -2
    case xs:anyAtomicType+ return
      1

    default return
      -3
) eq
  1
