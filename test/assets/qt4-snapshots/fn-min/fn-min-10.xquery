for $p in 1 to 4
let $x := (
  xs:integer(4), xs:decimal(3), xs:float(2), xs:double(1)
)[position() le $p]
return typeswitch (min($x))
    case xs:integer return
      "integer"
    case xs:decimal return
      "decimal"
    case xs:float return
      "float"
    case xs:double return
      "double"

    default return
      error()
