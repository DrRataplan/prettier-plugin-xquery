fn:replace(
  "A1 B234",
  "([A-Z]+)([0-9]+)",
  function ($s, $g) { string-join(characters($g[2])!($g[1] || .)) }
)
