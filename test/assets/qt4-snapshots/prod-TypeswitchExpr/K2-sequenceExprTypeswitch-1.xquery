boolean(
  typeswitch (current-time(), 1, 3e3, "foo")
    case node() return
      0
    case xs:integer return
      3
    case xs:anyAtomicType return
      true()

    default return
      -1
)
