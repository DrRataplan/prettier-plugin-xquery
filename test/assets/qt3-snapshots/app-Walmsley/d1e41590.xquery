declare function local:large-keys (
  $maparg as map(xs:integer, item()*)
) as xs:integer* {
  map:keys($maparg)[. > 50]
};

local:large-keys(map {10: "a", 55: "b", 60: "c"})
