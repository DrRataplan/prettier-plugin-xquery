(
  string-join(("a", "b", "c"), ""),
  string-join(("a", "b", "c"), "/*"),
  string-join(("a", "", "c"), "/*"),
  string-join("a", "/*"),
  string-join((), "/*")
)
