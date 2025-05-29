for $x in <?pi content?>, $y in document {
    $x
  }
return exactly-one($y/processing-instruction()) is $x
