let $keys :=
  let $range := 48 to 122
  for $c1 in $range, $c2 in $range, $c3 in $range
  return codepoints-to-string(($c1, $c2, $c3))

let $map := map:merge(($keys, $keys)!map:entry(., .))

return map:size($map) eq count($keys) and
    (
      every
        $key in
        $keys satisfies
        $map($key) eq $key and
          not(map:contains(map:remove($map, $key), $key)) and
          map:get(map:put($map, $key, "x"), $key) eq "x"
    )
