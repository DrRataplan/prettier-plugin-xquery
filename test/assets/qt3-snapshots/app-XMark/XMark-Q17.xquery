<XMark-result-Q17>
  {
    let $auction := (/)
    return for $p in $auction/site/people/person
      where empty($p/homepage/text())
      return <person name="{ $p/name/text() }" />
  }
</XMark-result-Q17>
