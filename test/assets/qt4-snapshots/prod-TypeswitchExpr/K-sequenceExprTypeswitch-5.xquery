(
  typeswitch (((1, current-time())[1]))
    case element() return
      -1
    case xs:integer return
      1

    default return
      -2
) eq
  1
