let $emp := validate lax { document {
      <employee
        xmlns:xs="http://www.w3.org/2001/XMLSchema"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xml:id="ID21256"
      >
        <empnr xsi:type="xs:ID">E21256</empnr>
        <first>John</first>
        <last>Brown</last>
      </employee>
    } }

return $emp/id("ID21256")/name()
