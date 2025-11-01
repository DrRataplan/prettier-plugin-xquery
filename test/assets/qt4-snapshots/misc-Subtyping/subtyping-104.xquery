import module namespace sub = "http://www.w3.org/qt4cg/subtyping";

sub:isSubtype("record(a,b as xs:decimal)", "record(a,b as xs:integer)")
