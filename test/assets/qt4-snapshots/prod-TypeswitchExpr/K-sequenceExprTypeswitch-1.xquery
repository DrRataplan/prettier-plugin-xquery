(
  typeswitch ((1, 2))
    case xs:integer return
      -1
    case xs:integer+ return
      1

    default return
      -2
) eq
  1
