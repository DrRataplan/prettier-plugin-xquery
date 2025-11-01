type-of(
  parse-xml('<a b="3">xxx<?pi pi>yyy?></a>')//node()[. =
    "xxx"]/following-sibling::node()[1]
)
