fn:csv-to-xml(
  "1,2,3,4,5,6|14,15,16",
  map {"row-delimiter": "|", "select-columns": 1 to 4}
)
