<XMark-result-Q1>
  {
    let $auction := (/)
    return for $b in $auction/site/people/person[@id = "person0"]
      return $b/name/text()
  }
</XMark-result-Q1>
