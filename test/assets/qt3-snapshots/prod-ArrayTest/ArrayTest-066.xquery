let $array := [map {1: map {2: map {}}}]
return $array instance of array(map(xs:integer, map(xs:integer, map(xs:integer,
map(*)))))
