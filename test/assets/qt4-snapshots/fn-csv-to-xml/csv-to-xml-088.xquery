fn:csv-to-xml(
  ' one,two ," three","four "| 1,2 , 3,4 ',
  map {"row-delimiter": "|", "header": true()}
)
