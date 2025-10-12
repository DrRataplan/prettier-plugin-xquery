let $res := fn:transform(
  map {
    "stylesheet-node": $multipledocs,
    "source-node": $sections,
    "delivery-format": "serialized"
  }
)
return map:keys($res)[. != "output"]!tokenize(., "/")[last()]
