fn:json-doc(
  "http://www.w3.org/qt3/json/mapUnescapeUnpaired10-json",
  map {
    "escape": true(),
    "fallback":
      function ($s) { "??" || translate($s, "abcdef", "ABCDEF") || "??" }
  }
)
