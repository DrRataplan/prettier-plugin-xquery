(: Purpose: Return the IDs of those auctions that have one or more keywords in emphasis. (cf. Q15) :)
<XMark-result-Q16> {
    let $auction := (/)
    return for $a in $auction/site/closed_auctions/closed_auction
      where not(
        empty(
          $a/annotation/description/parlist/listitem/parlist/listitem/text/emph/keyword/text()
        )
      )
      return <person id="{
            $a/seller/@person
          }" />
  } </XMark-result-Q16>
