let $users :=
  [
    map {"userid": "W0342", "firstname": "Walter", "lastname": "Denisovich"},
    map {"userid": "M0535", "firstname": "Mick", "lastname": "Goulish"}
  ]?*
let $holdings :=
  [
    map {"userid": "W0342", "ticker": "DIS", "shares": 153212312},
    map {"userid": "M0535", "ticker": "DIS", "shares": 10},
    map {"userid": "M0535", "ticker": "AIG", "shares": 23412}
  ]?*
return array
    {
      for $u in $users
      order by $u("userid")
      return map {
          "userid": $u("userid"),
          "first": $u("firstname"),
          "last": $u("lastname"),
          "holdings":
            array
              {
                for $h in $holdings
                where $h("userid") = $u("userid")
                order by $h("ticker")
                return map {"ticker": $h("ticker"), "share": $h("shares")}
              }
        }
    }
