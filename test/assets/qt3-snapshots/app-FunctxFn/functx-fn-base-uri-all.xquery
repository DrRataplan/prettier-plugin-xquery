let $cats := (/)
return (
    base-uri($cats//catalog[1]),
    base-uri($cats//catalog[2]/product),
    base-uri($cats//catalog[2]/product/@href)
  )
