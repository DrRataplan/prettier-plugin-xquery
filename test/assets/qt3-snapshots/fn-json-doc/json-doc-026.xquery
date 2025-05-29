fn:json-doc(
  "http://www.w3.org/qt3/json/mapUnescapeUnpaired10-json",
  map {"escape": false(), "fallback": function ($s) {
        "??" || translate($s, "abcdef", "ABCDEF") || "??"
      }}
)
