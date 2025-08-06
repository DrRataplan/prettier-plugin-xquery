for $t1 in unparsed-text("https://timeanddate.com")
return every
  $i in
  1 to 50 satisfies
  (
    parse-xml("<a><b><c>" || $i || "</c></b></a>")//c (: waste some time :) and
      unparsed-text(
        translate(concat("https://timeanddate.com", $i), "0123456789", "")
      ) eq
        $t1
  )
