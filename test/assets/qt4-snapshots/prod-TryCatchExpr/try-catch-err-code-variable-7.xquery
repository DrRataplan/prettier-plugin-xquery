try {
  fn:error(fn:QName("http://www.w3.org/2005/xqt-errors", "err:FOER0001"))
} catch * { fn:local-name-from-QName($err:code) }
