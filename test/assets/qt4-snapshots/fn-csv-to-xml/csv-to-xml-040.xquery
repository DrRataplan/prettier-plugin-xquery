fn:csv-to-xml(
  "left,right|one,two|three,four",
  map {"row-delimiter": "|", "header": true()}
)
