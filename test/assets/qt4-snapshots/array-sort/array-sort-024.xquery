array:sort(
  parse-json(
    '[{"key":1, "value":89}, {"key":6, "value":21}, {"key":"two", "value":33}]'
  ),
  (),
  map:get(?, "key")
)?*?value
