import schema namespace z =  "http://www.w3.org/XQueryTest/money"(: at "qischema063.xsd" :) ;

let $s := attribute {"currency"} { "USD" }
return validate lax {
    <z:a
      xmlns:z="http://www.w3.org/XQueryTest/money"
      currency="EUR"
      xsi:type="z:positive-money-amount"
    >{ $s }1234</z:a>
    }
