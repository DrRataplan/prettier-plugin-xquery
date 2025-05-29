fn:base-uri(
  exactly-one(
    <anElement xml:base="http://example.com/examples"><!-- a comment --></anElement>/comment()
  )
)
