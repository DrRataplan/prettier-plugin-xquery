import module namespace sub = "http://www.w3.org/qt4cg/subtyping";

sub:isSubtype(
  "element(a|b|c, xs:boolean)",
  "(element(a)|element(b)|element(c))"
)
