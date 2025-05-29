<result> {
    unordered(
      for $seller in $users//user_tuple,
        $buyer in $users//user_tuple,
        $item in $items//item_tuple,
        $highbid in $bids//bid_tuple
      where $seller/name = "Tom Jones" and
        $seller/userid = $item/offered_by and
        contains(exactly-one($item/description), "Bicycle") and
        $item/itemno = $highbid/itemno and
        $highbid/userid = $buyer/userid and
        $highbid/bid = max($bids//bid_tuple[itemno = $item/itemno]/bid)
      return <jones_bike> {
            $item/itemno
          } {
            $item/description
          } 
                        <high_bid>{
              $highbid/bid
            }</high_bid> 
                        <high_bidder>{
              $buyer/name
            }</high_bidder> 
                       </jones_bike>
    )
  } </result>
