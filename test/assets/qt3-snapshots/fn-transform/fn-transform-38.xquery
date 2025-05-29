let $res :=
  fn:transform(
    map {
      "stylesheet-node": $multipledocs,
      "source-node": $sections,
      "base-output-uri":
        resolve-uri(
          "transform/sandbox/fn-transform-38/output.html",
          static-base-uri()
        ),
      "delivery-format": "serialized"
    }
  )
return map:keys($res)
