fn:transform(
  map {
    "stylesheet-node": $sbu,
    "source-node": $sections,
    "initial-template": QName("", "main"),
    "base-output-uri": "fn/transform/output.xml",
    "delivery-format": "serialized"
  }
)?*
