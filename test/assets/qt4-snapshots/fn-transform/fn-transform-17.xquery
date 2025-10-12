fn:transform(
  map {
    "stylesheet-location": $render,
    "source-node": fn:doc($uri),
    "delivery-format": "document",
    "base-output-uri": $base-uri
  }
)
