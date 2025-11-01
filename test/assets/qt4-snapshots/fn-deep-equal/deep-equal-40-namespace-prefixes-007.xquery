deep-equal(
  node-name(parse-xml('<p:a xmlns:p="http://p.com"/>')/*),
  node-name(parse-xml('<q:a xmlns:q="http://p.com"/>')/*)
)
