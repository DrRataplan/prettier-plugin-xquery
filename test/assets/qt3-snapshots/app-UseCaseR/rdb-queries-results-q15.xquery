<result> {
    for $u in $users//user_tuple
    let $b := $bids//bid_tuple[userid = $u/userid and bid >= 100]
    where count($b) > 1
    return <big_spender>{
          $u/name/text()
        }</big_spender>
  } </result>
