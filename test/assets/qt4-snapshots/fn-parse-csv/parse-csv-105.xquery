fn:parse-csv(
  ' one,two ," three","four "| 1,2 , 3,4 ',
  map {
    "row-delimiter": "|",
    "header": (" first", "second ", " third", "fourth "),
    "trim-whitespace": true()
  }
)
