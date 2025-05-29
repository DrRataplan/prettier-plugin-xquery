try {
  fn:error()
} catch * {
  fn:namespace-uri-from-QName($err:code)
}
