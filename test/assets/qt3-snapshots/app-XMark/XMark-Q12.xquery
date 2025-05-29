(: Purpose: For each richer-than-average person, list the 
         number of items currently on sale whose price does not exceed 0.02% of the person's income. :)
<XMark-result-Q12> {
  let $auction := (/)
  return for $p in $auction/site/people/person
    let $l :=
      for $i in $auction/site/open_auctions/open_auction/initial
      where $p/profile/@income > 5000.0 * exactly-one($i/text())
      return $i
    where $p/profile/@income > 50000.0
    return <items person="{
        $p/profile/@income
      }">{
        count($l)
      }</items>
} </XMark-result-Q12>
