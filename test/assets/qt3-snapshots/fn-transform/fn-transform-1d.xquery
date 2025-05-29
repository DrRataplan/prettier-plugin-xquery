let $result :=
  fn:transform(
    map {
      "stylesheet-location": $render,
      "source-node": fn:doc($uri),
      "delivery-format": "serialized"
    }
  )
return $result("output") instance of xs:string
