concat(
  "#",
  fn:substring(./concepts/@id, string-length(./concepts/@id) - 18, 1),
  "#"
)
