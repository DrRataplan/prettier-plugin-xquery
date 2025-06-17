map:merge(
  ((1 to 20)!map {.: 0}, (10 to 30)!map {.: 0}),
  map {"duplicates": "combine"}
) (: 30 :)
  => map:remove((4, 8, 12)) (: 27 :)
  => map:put(50, 0) (: 28 :)
  => map:put(4, 0) (: 29 :)
  => map:put(1, 0) (: 29 :)
  => map:size()
