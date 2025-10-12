deep-equal(
  parse-json(
    '{
   "number": 557,
   "name": "Fleece Pullover",
   "colorChoices": ["navy","black"],
   "is-current": true,
   "other": null 
}'
  ),
  map {
    "number": xs:double(557),
    "name": "Fleece Pullover",
    "colorChoices": ["navy", "black"],
    "is-current": true(),
    "other": ()
  }
)
