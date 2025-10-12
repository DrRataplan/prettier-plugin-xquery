upper-case(
  typeswitch ((1 to 10)[. div 2 = 0])
    case xs:integer+ return
      "int"

    default return
      "false"
)
