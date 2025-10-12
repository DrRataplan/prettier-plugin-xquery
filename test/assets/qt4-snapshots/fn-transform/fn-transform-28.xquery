fn:transform(
  map {
    "stylesheet-location": $render,
    "source-node": fn:doc($uri),
    "delivery-format": "serialized",
    "serialization-params": map {"indent": false()}
  }
)
