deep-equal(
  parse-json(
    xml-to-json(
      <map xmlns="http://www.w3.org/2005/xpath-functions">
   <number key="number">557</number>
   <string key="name">Fleece Pullover</string>
   <array key="colorChoices">
      <string>navy</string>
      <string>black</string>
   </array>
   <boolean key="is-current">true</boolean>
   <null key="other"/>
</map>,
      map {"indent": true()}
    )
  ),
  map {
    "number": 557,
    "name": "Fleece Pullover",
    "colorChoices": ["navy", "black"],
    "is-current": true(),
    "other": ()
  }
)
