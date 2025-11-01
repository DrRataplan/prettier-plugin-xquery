import module namespace sub = "http://www.w3.org/qt4cg/subtyping";

sub:isSubtype(
  "document-node(a|b)",
  "(document-node(a)|document-node(b)|document-node(c))"
)
