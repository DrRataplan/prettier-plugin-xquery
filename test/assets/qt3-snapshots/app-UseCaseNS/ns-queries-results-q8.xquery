declare namespace ma = "http://www.example.com/AuctionWatch";

<Q8
  xmlns:eachbay="http://www.example.com/auctioneers#eachbay"
  xmlns:ma="http://www.example.com/AuctionWatch"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  {
    for $s in //ma:Trading_Partners/(ma:Seller | ma:High_Bidder)
    where $s/*:NegativeComments = 0
    return $s
  }
</Q8>
