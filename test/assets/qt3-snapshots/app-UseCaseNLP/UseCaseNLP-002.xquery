declare variable $index := map {"pos": 2, "lemma": 1};

<s>
           {
    for $w in json-doc("speech-representation.json")?*
    return <w pos="{
          $w($index("pos"))
        }">{
          $w($index("lemma"))
        }</w>
  }
          </s>
