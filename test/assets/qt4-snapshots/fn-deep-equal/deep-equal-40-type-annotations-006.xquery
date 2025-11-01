deep-equal(
  "foo",
  local-name-from-QName(parse-QName("foo")),
  map {"type-annotations": true()}
)
