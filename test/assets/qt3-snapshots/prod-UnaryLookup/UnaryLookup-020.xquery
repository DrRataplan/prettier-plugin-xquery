let $x :=
  (validate type xs:integer { <x>1</x> }, validate type xs:integer { <y>2</y> })
return (["a", "b", "c"], ["b", "c", "d"], ["e", "f", "b"])[?($x) = "b"]
