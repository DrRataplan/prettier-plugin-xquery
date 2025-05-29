fn:json-to-xml(
  '{"a":"\uDA00", "\uDD00":"bell"}',
  map {"escape": true(), "fallback": function ($s) {
        "??" || translate($s, "abcdef", "ABCDEF") || "??"
      }}
)
