fn:transform(
  map {
    "stylesheet-node": $include,
    "source-node": $works,
    "stylesheet-base-uri": string(base-uri($include))
  }
)("output")
