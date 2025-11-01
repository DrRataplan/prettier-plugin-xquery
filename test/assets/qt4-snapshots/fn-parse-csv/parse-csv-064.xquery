fn:parse-csv(
  "1,2,3,4|11,12,13,14,15,16",
  map {"row-delimiter": "|", "trim-rows": false(), "header": false()}
)
