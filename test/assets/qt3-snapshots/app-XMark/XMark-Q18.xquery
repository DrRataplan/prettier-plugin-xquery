(: Purpose: Convert the currency of the reserve of all open auctions to another currency. :)
declare namespace local = "http://www.example.com/";

declare function local:convert ($v as xs:decimal?) as xs:decimal? {
  2.20371 * $v
};

<XMark-result-Q18>
  {
    let $auction := (/)
    return for $i in $auction/site/open_auctions/open_auction
      return local:convert(zero-or-one($i/reserve))
  }
</XMark-result-Q18>
