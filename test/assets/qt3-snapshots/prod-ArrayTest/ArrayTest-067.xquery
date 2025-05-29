let $array := [map {1: map {2: map {true(): false()}}}]
return $array instance of array(map(xs:integer, map(xs:integer, map(xs:integer,
  map(*)))))
