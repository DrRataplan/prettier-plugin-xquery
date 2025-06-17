fn:json-doc(
  (),
  map {
    "escape": false(),
    "fallback":
      function ($s) { "??" || translate($s, "abcdef", "ABCDEF") || "??" }
  }
)
