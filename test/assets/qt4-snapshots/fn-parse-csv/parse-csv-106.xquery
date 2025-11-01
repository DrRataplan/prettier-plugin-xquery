fn:parse-csv(
  "one,two,three,four" || char(13) || char(10) || "1,2,3,4",
  map {"header": ("first", "second", "third", "fourth")}
)
