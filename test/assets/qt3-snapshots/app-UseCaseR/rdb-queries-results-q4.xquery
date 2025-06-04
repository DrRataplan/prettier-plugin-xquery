<result>
  {
    for $i in $items//item_tuple
    where empty($bids//bid_tuple[itemno = $i/itemno])
    return <no_bid_item>{
          $i/itemno
        }{
          $i/description
        }</no_bid_item>
  }
</result>
