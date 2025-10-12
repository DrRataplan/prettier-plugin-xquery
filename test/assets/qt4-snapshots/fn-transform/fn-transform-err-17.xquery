let $result := fn:transform(
  map {
    "stylesheet-location": $render,
    "initial-match-selection": fn:doc($uri),
    "source-node": fn:doc($uri)
  }
)
return $result?output
