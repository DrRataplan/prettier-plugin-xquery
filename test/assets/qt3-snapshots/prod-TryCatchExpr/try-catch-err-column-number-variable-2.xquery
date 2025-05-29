try {
  fn:error()
} catch * {
  count($err:column-number)
}
