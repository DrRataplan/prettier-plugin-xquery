<XMark-result-Q6>
  {
    let $auction := (/)
    return for $b in $auction//site/regions
      return count($b//item)
  }
</XMark-result-Q6>
