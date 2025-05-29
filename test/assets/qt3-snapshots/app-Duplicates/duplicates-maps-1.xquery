let $seq := (1 to 1000, 1, 1)
let $map :=
  map:merge(($seq!map:entry(string(.), .)), map {"duplicates": "combine"})
return map:keys($map)!map:get($map, .)[position() = 2]
