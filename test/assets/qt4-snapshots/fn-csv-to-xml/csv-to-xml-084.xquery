fn:csv-to-xml(
  "1,2,3,4|11,12,13,14,15",
  map {"select-columns": (1, 4, 5), "row-delimiter": "|"}
)
