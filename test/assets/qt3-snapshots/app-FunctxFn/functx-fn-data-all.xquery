let $cat := (/)
return (
    data($cat//product[1]/number),
    data($cat//number),
    data($cat//product[1]/@dept),
    data($cat//product[1]/colorChoices),
    data($cat//product[1]),
    data($cat//product[4]/desc)
  )
