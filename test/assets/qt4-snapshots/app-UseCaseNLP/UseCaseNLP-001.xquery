<s>
  {
    for $w in json-doc("speech-representation.json")?*
    return <w pos="{ $w(2) }">{ $w(1) }</w>
  }
</s>
