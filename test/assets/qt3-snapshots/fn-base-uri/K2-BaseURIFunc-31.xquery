fn:base-uri(
  exactly-one(
    <anElement xml:base="http://example.com/examples">
      <?target data?>
    </anElement>/processing-instruction()
  )
)
