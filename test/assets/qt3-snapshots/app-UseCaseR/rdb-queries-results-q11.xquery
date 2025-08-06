let $highbid := max($bids//bid_tuple/bid)
return <result>
  {
    for $item in $items//item_tuple,
      $b in $bids//bid_tuple[itemno = $item/itemno]
    where $b/bid = $highbid
    return <expensive_item>
      { $item/itemno }
      { $item/description }
      <high_bid>{ $highbid }</high_bid>
    </expensive_item>
  }
</result>
