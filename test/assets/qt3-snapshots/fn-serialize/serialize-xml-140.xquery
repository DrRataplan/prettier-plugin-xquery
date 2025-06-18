let $options := map {
  "use-character-maps":
    map {"x": xs:untypedAtomic("j"), "m": <e>so</e>, "l": "n"}
}
return serialize(<e>[xml]</e>, $options)
