deep-equal(
  fn:tokenize("The cat sat on the mat", "\s+"),
  ("The", "cat", "sat", "on", "the", "mat")
),
count(fn:tokenize("The cat sat on the mat", "\s+")),
count(fn:tokenize(" The cat sat on the mat ", "\s+")),
fn:tokenize("The cat sat on the mat", "\s+")
