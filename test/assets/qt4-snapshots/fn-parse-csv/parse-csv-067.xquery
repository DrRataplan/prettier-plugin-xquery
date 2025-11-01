fn:parse-csv(
  "a,b,c,d,e|1,2,3|14,15,16",
  map {"row-delimiter": "|", "trim-rows": true(), "header": true()}
)
