fn:parse-csv(
  "one,two,three,four" || char(13) || "1,2,3,4",
  map {"header": ("first", "second", "third", "fourth")}
)
