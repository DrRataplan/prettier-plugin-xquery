fn:sort(
  (
    map {"key": 1, "value": 89},
    map {"key": 6, "value": 21},
    map {"key": 2, "value": 33}
  ),
  (),
  map:get(?, "key")
)?value
