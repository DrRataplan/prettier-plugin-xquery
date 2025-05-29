<XMark-result-Q5> {
    let $auction := (/)
    return count(
        for $i in $auction/site/closed_auctions/closed_auction
        where $i/price/text() >= 40.0
        return $i/price
      )
  } 
        </XMark-result-Q5>
