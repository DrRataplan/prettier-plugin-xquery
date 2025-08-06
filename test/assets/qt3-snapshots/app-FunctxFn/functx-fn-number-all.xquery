let $priceDoc := (/)
return (
  number($priceDoc//prod[1]/price),
  number($priceDoc//prod[1]/@currency),
  number("29.99"),
  number("ABC"),
  number(()),
  $priceDoc//prod/price[number() > 35]
)
