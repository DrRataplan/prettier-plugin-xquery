<XMark-result-Q2>
  {
    let $auction := (/)
    return for $b in $auction/site/open_auctions/open_auction
      return <increase>{ $b/bidder[1]/increase/text() }</increase>
  }
</XMark-result-Q2>
