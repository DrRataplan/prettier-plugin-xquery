<XMark-result-Q7>
  {
    let $auction := (/)
    return for $p in $auction/site
      return count($p//description) +
          count($p//annotation) +
          count($p//emailaddress)
  }
</XMark-result-Q7>
