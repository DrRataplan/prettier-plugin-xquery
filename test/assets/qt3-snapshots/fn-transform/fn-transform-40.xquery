fn:transform(
  map {
    "stylesheet-node": $onedoc,
    "source-node": $sections,
    "base-output-uri":
      resolve-uri(
        "transform/sandbox/fn-transform-40/output.html",
        static-base-uri()
      ),
    "delivery-format": "serialized"
  }
)
