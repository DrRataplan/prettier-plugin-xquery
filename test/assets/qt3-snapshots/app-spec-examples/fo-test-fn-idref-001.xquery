let $emp := validate lax {
  document {
    <employees
      xmlns:xs="http://www.w3.org/2001/XMLSchema"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    >
      <employee xml:id="ID21256">
        <empnr xsi:type="xs:ID">E21256</empnr>
        <first>Anil</first>
        <last>Singh</last>
        <deputy xsi:type="xs:IDREF">E30561</deputy>
      </employee>
      <employee xml:id="ID30561">
        <empnr xsi:type="xs:ID">E30561</empnr>
        <first>John</first>
        <last>Brown</last>
        <manager xsi:type="xs:IDREF">ID21256</manager>
      </employee>
    </employees>
  }
  }

return $emp/(
  element-with-id("ID21256")/@xml:id => fn:idref()
)/ancestor::employee/last
  => string()
