function ($in as xs:decimal*) as xs:decimal { sum($in, 0.0) }(
  xs:NMTOKENS("1 1.2 1.3 1.4")!xs:untypedAtomic(.)
)
