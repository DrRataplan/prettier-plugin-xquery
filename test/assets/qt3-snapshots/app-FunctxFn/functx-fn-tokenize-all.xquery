(
  tokenize("a b c", "\s"),
  tokenize("a b c", "\s"),
  tokenize("a b c", "\s+"),
  tokenize(" b c", "\s"),
  tokenize("a,b,c", ","),
  tokenize("a,b,,c", ","),
  tokenize("a, b, c", "[,\s]+"),
  tokenize("2006-12-25T12:15:00", "[\-T:]"),
  tokenize("Hello, there.", "\W+"),
  tokenize((), "\s+"),
  tokenize("abc", "\s"),
  tokenize("a,xb,xc", ",|,x")
)
