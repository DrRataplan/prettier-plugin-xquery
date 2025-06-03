let $allbikes :=
  $items//item_tuple[contains(exactly-one(description), "Bicycle") or
    contains(exactly-one(description), "Tricycle")]
let $bikebids := $bids//bid_tuple[itemno = $allbikes/itemno]
return <high_bid>{
      max($bikebids/bid)
    }</high_bid>
