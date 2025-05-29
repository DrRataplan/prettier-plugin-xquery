try {
  fn:error()
} catch * {
  fn:prefix-from-QName($err:code)
}
