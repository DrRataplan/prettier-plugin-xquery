parse-json(
  '{"x":"\\", "y":"\u0000"}',
  map {"fallback": function ($s) { "[" || $s || "]" }}
)
