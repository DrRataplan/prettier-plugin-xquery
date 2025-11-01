fn:parse-csv(
  "left,right|one,two|three,four",
  map {"row-delimiter": "|", "header": true()}
)
