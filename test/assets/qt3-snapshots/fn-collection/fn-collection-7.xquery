distinct-values(
  fn:collection($collection-uri)//*[text()[contains(
    .,
    "TCP/IP"
  )]]/normalize-space()
)
