type-of(parse-xml('<a b="3">xxx<!--comment-->yyy</a>')//node()[. = "xxx"])
