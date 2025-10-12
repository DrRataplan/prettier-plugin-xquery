string-join(
  (
    format-number("NaN", "###", "foo:decimal1"),
    format-number(-13.2, "###.0", "foo:decimal1"),
    format-number("NaN", "###", "baz:decimal1"),
    format-number(-13.2, "###.0", "baz:decimal1")
  ),
  "|"
)
