<frequent_bidder> {
  for $u in $users//user_tuple
  where every
    $item in
    $items//item_tuple satisfies
    some
      $b in
      $bids//bid_tuple satisfies
      ($item/itemno = $b/itemno and $u/userid = $b/userid)
  return $u/name
} </frequent_bidder>
