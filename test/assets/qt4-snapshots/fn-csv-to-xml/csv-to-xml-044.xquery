fn:csv-to-xml(
  "one,two|three,four",
  map {"row-delimiter": "|", "header": ("", "right")}
)
