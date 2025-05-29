(
  typeswitch (1, 2, current-time())
    case element() return
      -1
    case document-node() return
      -2

    default return
      1
) eq
  1
