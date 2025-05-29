string-length(
  xs:NCName(
    prefix-from-QName(
      node-name(attribute {QName("http://example.com/", "attr")} {
          ()
        })
    )
  )
) >
  0
