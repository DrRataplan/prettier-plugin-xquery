fn:transform(
  map {
    "stylesheet-location": $render,
    "source-node": fn:doc($uri),
    "base-output-uri":
      resolve-uri("transform/sandbox/fn-transform-36.xml", static-base-uri()),
    "delivery-format": "serialized",
    "serialization-params": map {"indent": true()}
  }
)
