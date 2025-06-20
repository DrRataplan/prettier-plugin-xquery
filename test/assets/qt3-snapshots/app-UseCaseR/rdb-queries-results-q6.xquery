<result>
  {
    for $item in $items//item_tuple
    let $b := $bids//bid_tuple[itemno = $item/itemno]
    let $z := max($b/bid)
    where exactly-one($item/reserve_price) * 2 < $z
    return <successful_item>
        { $item/itemno }
        { $item/description }
        { $item/reserve_price }
        <high_bid>{ $z }</high_bid>
      </successful_item>
  }
</result>
