<result>
  {
    for $i in $items//item_tuple
    let $b := $bids//bid_tuple[itemno = $i/itemno]
    where contains(exactly-one($i/description), "Bicycle")
    order by $i/itemno
    return <item_tuple>{
          $i/itemno
        }{
          $i/description
        }<high_bid>{
            max($b/bid)
          }</high_bid></item_tuple>
  }
</result>
