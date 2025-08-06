let $ordDoc := (/)
return (
  boolean(()),
  boolean(""),
  boolean(0),
  boolean("0"),
  boolean("false"),
  boolean(xs:float("NaN")),
  boolean($ordDoc/order[1]),
  boolean($ordDoc/noSuchChild),
  boolean(<a>false</a>)
)
