fn:parse-csv(
  "1,2,3,4|11,12,13,14",
  map {"select-columns": (1, 17, 4), "row-delimiter": "|"}
)
