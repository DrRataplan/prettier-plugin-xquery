fn:csv-to-xml(
  "left,left|one,two|three,four",
  map {"row-delimiter": "|", "header": true()}
)
