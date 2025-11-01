let $data := parse-xml(
  "<a><b><?tea time now?></b><b><?tea  time  now?></b></a>"
)
return deep-equal(
    $data//b[1],
    $data//b[2],
    map {"whitespace": "normalize", "processing-instructions": true()}
  )
