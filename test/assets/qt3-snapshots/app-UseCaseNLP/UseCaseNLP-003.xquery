array
  {
    for $w in json-doc("speech-representation.json")?*
    return map {"pos": $w(2), "lemma": $w(1)}
  }
