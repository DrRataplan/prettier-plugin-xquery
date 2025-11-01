fn:replace(
  "57°43′30″",
  "([0-9]+)°([0-9]+)′([0-9]+)″",
  function ($s, $g) {
    string(number($g[1]) + number($g[2]) div 60 + number($g[3]) div 3600) || "°"
  }
)
