(
  typeswitch ("a string")
    case xs:untypedAtomic return
      -1
    case xs:string return
      1

    default return
      -2
) eq
  1
