let $emp := validate lax { document {
      <employee xml:id="ID21256"
                      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
                      xmlns:xs="http://www.w3.org/2001/XMLSchema">
               <empnr xsi:type="xs:ID">E21256</empnr>
               <first>John</first>
               <last>Brown</last>
            </employee>
    } }
return $emp/id("E21256")/name()
