map:filter(
  map:merge((1 to 10)!map:entry(., string())),
  function ($k, $v) { $v < "2" }
)?*
  => sort()
