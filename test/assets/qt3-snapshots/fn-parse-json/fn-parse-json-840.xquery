parse-json(
  '{"' || codepoints-to-string((10, 37)) || '":"x", "yyy":"y"}',
  map {"liberal": true()}
)
