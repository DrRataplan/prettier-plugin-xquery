fn:transform(
  map {
    "stylesheet-node": $multipledocs,
    "source-node": $sections,
    "base-output-uri":
      resolve-uri(
        "transform/sandbox/fn-transform-43/output.html",
        static-base-uri()
      ),
    "delivery-format": "serialized"
  }
)
