(collation-key("abc") lt collation-key("ABC")) eq
  (compare("abc", "ABC", default-collation()) lt 0)
