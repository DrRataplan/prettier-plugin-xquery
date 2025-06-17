deep-equal(
  array:sort(
    [
      [<e>a</e>, <e>b</e>],
      [(<f>a</f>, <f>b</f>)],
      [<g>a</g>, <g>b</g>],
      "A",
      ("A", "B")
    ]
  ),
  [
    "A",
    ("A", "B"),
    [<e>a</e>, <e>b</e>],
    [(<f>a</f>, <f>b</f>)],
    [<g>a</g>, <g>b</g>]
  ]
)
