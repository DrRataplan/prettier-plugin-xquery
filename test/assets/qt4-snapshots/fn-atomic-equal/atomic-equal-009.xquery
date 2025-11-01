every(
  (
    atomic-equal(16777218, xs:double("16777218")),
    atomic-equal(16777218, xs:decimal("16777218")),
    atomic-equal(16777218, xs:float("16777218")),
    atomic-equal(xs:double(16777218), xs:decimal("16777218"))
  )
)
