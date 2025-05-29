import schema namespace z =  "http://www.w3.org/XQueryTest/money"(:at "qischema063.xsd":) ;

validate strict {
  <z:a xsi:type="z:positive-money-amount" xmlns:z="http://www.w3.org/XQueryTest/money">-1234</z:a>
  }
