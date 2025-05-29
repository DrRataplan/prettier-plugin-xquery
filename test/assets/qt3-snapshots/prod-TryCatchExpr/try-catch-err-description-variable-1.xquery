try {
  1 div 0
} catch * {
  count($err:description) le 1
}
