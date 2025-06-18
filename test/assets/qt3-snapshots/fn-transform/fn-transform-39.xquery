let $res := fn:transform(
  map {
    "stylesheet-node": $multipledocs2,
    "source-node": $sections,
    "delivery-format": "serialized"
  }
)
return map:keys($res)
