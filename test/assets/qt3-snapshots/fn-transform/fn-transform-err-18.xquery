let $result :=
  fn:transform(
    map {
      "stylesheet-location": $render,
      "source-node": fn:doc($uri),
      "stylesheet-params": map {"debug": true()}
    }
  )
return $result?output
