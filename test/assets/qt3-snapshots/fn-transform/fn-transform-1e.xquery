let $result := fn:transform(
  map {
    "stylesheet-location": $render,
    "source-node": fn:doc($uri),
    "delivery-format": "document"
  }
)
return $result("output") instance of node()
