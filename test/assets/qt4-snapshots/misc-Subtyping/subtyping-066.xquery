import module namespace sub = "http://www.w3.org/qt4cg/subtyping";

sub:isSubtype(
  "element(a|b, xs:long)",
  "(element(a, xs:integer)|element(b, xs:decimal))"
)
