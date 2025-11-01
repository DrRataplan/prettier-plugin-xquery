fn:parse-csv(
  "one,'two,''2'''|three,'four,''4'''",
  map {"row-delimiter": "|", "quote-character": "'"}
)
