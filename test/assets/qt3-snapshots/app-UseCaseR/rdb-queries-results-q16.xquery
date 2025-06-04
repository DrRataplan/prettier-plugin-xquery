<result> {
    for $u in $users//user_tuple
    let $b := $bids//bid_tuple[userid = $u/userid]
    order by exactly-one($u/userid)
    return <user> {
          $u/userid
        } {
          $u/name
        } {
          if (empty($b)) then
            <status>inactive</status>
          else
            <status>active</status>
        } </user>
  } </result>
