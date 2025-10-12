let $options := map {
  "method": "xml",
  "indent": xs:untypedAtomic("false"),
  "item-separator": xs:untypedAtomic("  ")
}
return serialize((<e />, <f />), $options)
