let $out1 := fn:transform(
    map {
      "stylesheet-location": $render,
      "source-node": fn:doc($uri),
      "delivery-format": "serialized",
      "serialization-params": map {"indent": true()}
    }
  )("output"),
  $out2 := fn:transform(
    map {
      "stylesheet-location": $render,
      "source-node": fn:doc($uri),
      "delivery-format": "serialized",
      "serialization-params": map {"indent": false()}
    }
  )("output")
return $out1 eq $out2
