deep-equal(
  parse-json(
    serialize(
      map {
        "number": xs:double(557),
        "name": "Fleece Pullover",
        "colorChoices": ["navy", "black"],
        "is-current": true(),
        "other": ()
      },
      <output:serialization-parameters
        xmlns:output="http://www.w3.org/2010/xslt-xquery-serialization"
      >
        <output:method value="json" />
        <output:indent value="yes" />
      </output:serialization-parameters>
    )
  ),
  parse-json(
    '{
   "number": 557,
   "name": "Fleece Pullover",
   "colorChoices": ["navy", "black"],
   "is-current": true,
   "other": null 
}'
  )
)
