(: Purpose: Give an alphabetically ordered list of all items along with their location. :)
<XMark-result-Q19> {
    let $auction := (/)
    return for $b in $auction/site/regions//item
      let $k := $b/name/text()
      stable order by zero-or-one($b/location) ascending empty greatest
      return <item name="{
            $k
          }">{
            $b/location/text()
          }</item>
  } </XMark-result-Q19>
