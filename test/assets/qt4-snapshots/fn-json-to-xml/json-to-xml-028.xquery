fn:json-to-xml(
  (),
  map {
    "escape": false(),
    "fallback":
      function ($s) { "??" || translate($s, "abcdef", "ABCDEF") || "??" }
  }
)
