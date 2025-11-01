map:filter(
  map:merge((1 to 10)!map:entry(., string())),
  function ($k, $v) { $k < 2 }
)
  => map:keys()
