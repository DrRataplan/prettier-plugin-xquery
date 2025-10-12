<result>
  {
    for $highbid in $bids//bid_tuple, $user in $users//user_tuple
    where $user/userid = $highbid/userid and
      $highbid/bid = max($bids//bid_tuple[itemno = $highbid/itemno]/bid)
    order by exactly-one($highbid/itemno)
    return <high_bid>
        { $highbid/itemno }
        { $highbid/bid }
        <bidder>{ $user/name/text() }</bidder>
      </high_bid>
  }
</result>
