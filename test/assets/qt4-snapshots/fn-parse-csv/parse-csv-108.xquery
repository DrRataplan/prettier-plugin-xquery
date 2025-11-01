fn:parse-csv(
  "one,two,three,four" ||
    char(13) ||
    char(10) ||
    '11,"2' ||
    char(13) ||
    char(10) ||
    '2",33,44',
  map {"header": ("first", "second", "third", "fourth")}
)
