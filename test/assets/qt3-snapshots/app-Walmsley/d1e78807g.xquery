deep-equal(
  parse-json(
    '{
   "number": 557,
   "name": "Fleece Pullover",
   "name": "Fleece Pullover Redux",
   "colorChoices": ["navy \u00E9", "black \uFFFF"],
   "is-current": true,
   "other": null
}',
    map {
      "duplicates": "use-first",
      "validate": false(),
      "escape": false(),
      "fallback": function ($s) { "ERROR!!" }
    }
  ),
  map {
    "number": xs:double(557),
    "name": "Fleece Pullover",
    "colorChoices": ["navy é", "black ERROR!!"],
    "is-current": true(),
    "other": ()
  }
)
