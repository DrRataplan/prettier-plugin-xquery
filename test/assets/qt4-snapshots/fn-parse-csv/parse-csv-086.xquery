fn:parse-csv(
  "first,second,third,fourth|1,2,3,4|11,12,13,14",
  map {"select-columns": (1, 4, 3), "header": true(), "row-delimiter": "|"}
)
