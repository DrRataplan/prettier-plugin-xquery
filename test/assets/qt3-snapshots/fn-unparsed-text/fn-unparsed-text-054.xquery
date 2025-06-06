for $t1 in unparsed-text("http://date.jsontest.com")
return every
    $i in
    1 to 50 satisfies
    (
      parse-xml("<a><b><c>" || $i || "</c></b></a>")//c (:waste some time:) and
        unparsed-text(
          translate(concat("http://date.jsontest.com", $i), "0123456789", "")
        ) eq
          $t1
    )
