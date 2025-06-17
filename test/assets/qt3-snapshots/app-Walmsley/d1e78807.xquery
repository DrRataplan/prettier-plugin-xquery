deep-equal(
  let $result :=
    transform(
      map {
        "stylesheet-location": "render.xsl",
        "source-node": doc("catalog.xml")
      }
    )
  return $result?output,
  document { <p>There are 4 products in the catalog.</p> }
)
