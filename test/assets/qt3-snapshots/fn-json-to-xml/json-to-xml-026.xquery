fn:json-to-xml(
  '{"a":"\uDA00", "\uDD00":"bell"}',
  map {"escape": false(), "fallback": function ($s) {
        "??" || translate($s, "abcdef", "ABCDEF") || "??"
      }}
)
