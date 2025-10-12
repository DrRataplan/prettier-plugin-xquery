fn:transform(
  map {
    "stylesheet-node": $multipledocs,
    "source-node": $sections,
    "base-output-uri": "http://www.w3.org/fots/fn/transform/output-doc.xml"
  }
)
  => map:remove("http://www.w3.org/fots/fn/transform/output-doc.xml")
  => map:keys()
