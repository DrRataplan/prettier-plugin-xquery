let $data := parse-xml("<a><b><!--tea time--></b><b><!-- tea  time --></b></a>")
return deep-equal(
    $data//b[1],
    $data//b[2],
    map {"whitespace": "normalize", "comments": true()}
  )
