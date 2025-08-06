<result>
  {
    for $u in $users//user_tuple
    order by $u/name
    return <user>
      { $u/name }
      {
        for $b in distinct-values($bids//bid_tuple[userid = $u/userid]/itemno)
        for $i in $items//item_tuple[itemno = $b]
        let $descr := $i/description/text()
        order by exactly-one($descr)
        return <bid_on_item>{ $descr }</bid_on_item>
      }
    </user>
  }
</result>
