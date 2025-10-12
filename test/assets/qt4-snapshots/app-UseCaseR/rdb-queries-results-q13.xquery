<result>
  {
    for $uid in distinct-values($bids//userid),
      $u in $users//user_tuple[userid = $uid]
    let $b := $bids//bid_tuple[userid = $uid]
    order by exactly-one($u/userid)
    return <bidder>
        { $u/userid }
        { $u/name }
        <bidcount>{ count($b) }</bidcount>
        <avgbid>{ avg($b/bid) }</avgbid>
      </bidder>
  }
</result>
