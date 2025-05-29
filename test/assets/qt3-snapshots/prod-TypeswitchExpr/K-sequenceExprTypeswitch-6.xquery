(
  typeswitch (())
    case xs:integer* return
      1
    case empty-sequence() return
      1

    default return
      -2
) eq
  1
