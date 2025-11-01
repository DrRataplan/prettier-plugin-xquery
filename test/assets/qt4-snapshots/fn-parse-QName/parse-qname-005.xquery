fn:parse-QName("Q{http://example.com/ns}banana") eq
  fn:QName("http://example.com/ns", "banana")
