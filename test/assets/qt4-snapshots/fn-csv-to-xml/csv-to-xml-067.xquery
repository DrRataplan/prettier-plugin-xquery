fn:csv-to-xml(
  "a,b,c,d,e|1,2,3,4,5|14,15,16",
  map {"row-delimiter": "|", "trim-rows": true(), "header": true()}
)
