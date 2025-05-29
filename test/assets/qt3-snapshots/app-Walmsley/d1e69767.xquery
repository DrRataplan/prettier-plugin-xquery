deep-equal(
  parse-json(
    '{
   "number": 557,
   "name": "Fleece Pullover",
   "colorChoices": ["navy","black"]
}'
  ),
  map {
    "number": xs:double(557),
    "name": "Fleece Pullover",
    "colorChoices": ["navy", "black"]
  }
)
