(: Purpose: List the names of items registered in Australia along with their descriptions. :)
<XMark-result-Q13> {
    let $auction := (/)
    return for $i in $auction/site/regions/australia/item
      return <item name="{
            $i/name/text()
          }">{
          $i/description
        }</item>
  } </XMark-result-Q13>
