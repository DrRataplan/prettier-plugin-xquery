fn:csv-to-xml(
  "1,2,3,4|11,12,13,14",
  map {"select-columns": (4, 3, 2, 1), "row-delimiter": "|"}
)
