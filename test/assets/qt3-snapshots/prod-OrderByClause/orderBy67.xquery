for $j in (text {
      "Az"
    }, text {
      "Bx"
    }, text {
      "Cy"
    })
order by $j/substring(., $j/string-length(.))
return $j/string()
