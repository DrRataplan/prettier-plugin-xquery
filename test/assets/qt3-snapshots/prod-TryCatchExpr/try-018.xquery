try {
  1 div 0
} catch local:foo|local:bar {
  "first"
}catch * {
  "second"
}
