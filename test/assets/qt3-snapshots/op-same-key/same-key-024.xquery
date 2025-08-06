let $keys :=
  let $range := 48 to 122
  for $c1 in $range, $c2 in $range
  let $i := $c1 * 1000 + $c2
  return (
    codepoints-to-string(($c1, $c2)),
    switch ($i mod 3)
      case 0 return
        xs:integer($i)
      case 1 return
        xs:decimal($i)
      case 2 return
        xs:double($i)
      default return
        error()
  )

let $map := map:merge(
  ($keys, $keys)!map:entry(., .),
  map {"duplicates": "use-last"}
)

return map:size($map) eq count($keys) and
  (
    every
      $key in
      $keys satisfies
      $map($key) eq $key and
        not(map:contains(map:remove($map, $key), $key)) and
        map:get(map:put($map, $key, "x"), $key) eq "x"
  )
