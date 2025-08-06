let $in := parse-xml("<dummy/>")
return transform(
  map {
    "source-node": $in/*,
    "global-context-item": $in,
    "stylesheet-node": $stylesheet,
    "xslt-version": 3.0
  }
)?output
