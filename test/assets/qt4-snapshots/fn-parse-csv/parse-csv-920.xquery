fn:parse-csv(
  "one,two|three,four",
  map {"row-delimiter": "|", "column-names": ("left", "right")}
)
