fn:parse-csv(
  ",right|one,two|three,four",
  map {"row-delimiter": "|", "header": true()}
)
