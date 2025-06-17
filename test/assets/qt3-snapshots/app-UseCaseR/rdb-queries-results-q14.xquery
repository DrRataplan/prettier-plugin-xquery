<result>
  {
    for $i in distinct-values($items//itemno)
    let $b := $bids//bid_tuple[itemno = $i]
    let $avgbid := avg($b/bid)
    where count($b) >= 3
    order by $avgbid descending
    return <popular_item>
        <itemno>{ $i }</itemno>
        <avgbid>{ $avgbid }</avgbid>
      </popular_item>
  }
</result>
