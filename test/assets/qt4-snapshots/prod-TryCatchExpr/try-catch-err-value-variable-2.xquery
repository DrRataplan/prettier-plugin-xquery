try {
  fn:error(
    fn:QName("http://www.w3.org/2005/xqt-errors", "err:FOER0000"),
    "Description",
    ("Value", 3, <a />, true())
  )
} catch * { count($err:value) }
