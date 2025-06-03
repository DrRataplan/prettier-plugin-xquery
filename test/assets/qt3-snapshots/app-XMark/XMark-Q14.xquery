(: Purpose: Return the names of all items whose description contains the word `gold'. :)
<XMark-result-Q14>
  {
    let $auction := (/)
    return for $i in $auction/site//item
      where contains(string(exactly-one($i/description)), "gold")
      return $i/name/text()
  }
</XMark-result-Q14>
