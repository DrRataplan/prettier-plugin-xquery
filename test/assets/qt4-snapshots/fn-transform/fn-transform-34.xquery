fn:transform(
  map {
    "stylesheet-node": $render,
    "source-node": $works,
    "base-output-uri":
      resolve-uri("transform/sandbox/fn-transform-34.xml", static-base-uri()),
    "delivery-format": "document"
  }
)?*
