deep-equal(
  sort(
    (
      [<e>a</e>, <e>b</e>],
      [(<f>a</f>, <f>b</f>)],
      [<g>a</g>, <g>b</g>],
      "A",
      <h><i><j>A</j></i></h>
    )
  ),
  (
    "A",
    <h><i><j>A</j></i></h>,
    [<e>a</e>, <e>b</e>],
    [(<f>a</f>, <f>b</f>)],
    [<g>a</g>, <g>b</g>]
  )
)
