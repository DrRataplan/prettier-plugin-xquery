let $in := parse-xml("<dummy/>"), $style := doc($variable-uri)
return (
    transform(
      map {
        "source-node": $in,
        "stylesheet-node": $style,
        "stylesheet-params": map {QName("", "v"): "2"}
      }
    )
  )?output
