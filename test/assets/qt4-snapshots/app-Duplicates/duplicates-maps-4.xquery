let $seq := (1 to 1000, 1, 1)
let $contains := map:contains#2
let $put := map:put#3
let $map := fold-left(
  $seq,
  map {"distinct": map {}, "dups": map {}},
  function ($accum as map(*), $current as xs:integer) {
    if ($contains($accum?distinct, $current)) then (
      $put($accum, "dups", $put($accum?dups, $current, ()))
    ) else (
      $put($accum, "distinct", $put($accum?distinct, $current, ()))
    )
  }
)
return map:keys($map?dups)
