let $m := map {"a": (1, 2), "b": 2, "c": 1, "d": 3}
return map:merge(
    for $key in sort(map:keys($m), (), fn:data#1)
    return for $val in map:get($m, $key)
      return map {$val: $key},
    map {"duplicates": "combine"}
  )
