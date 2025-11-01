import module namespace sub = "http://www.w3.org/qt4cg/subtyping";

sub:isSubtype(
  "(element(a, xs:integer)|element(b, xs:integer))",
  "element(a|b, xs:decimal)"
)
