fn:json-to-xml(
  '{"a":"\u000C", "\u0007":"bell"}',
  map {"escape": false(), "fallback": function ($s) { "??" }}
)
