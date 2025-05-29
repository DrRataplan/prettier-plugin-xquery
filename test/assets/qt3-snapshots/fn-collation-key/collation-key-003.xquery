(collation-key("abc") eq collation-key("ABC")) eq
  (compare("abc", "ABC", default-collation()) eq 0)
