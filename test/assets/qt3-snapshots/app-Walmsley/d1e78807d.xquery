json-to-xml(
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
    "fallback": function ($s) {
        "ERROR!!"
      }
  }
)
