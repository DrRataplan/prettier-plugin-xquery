let $result :=
  fn:transform(
    map {"stylesheet-location": $render, "source-node": fn:doc($uri)}
  )
return $result("output")
