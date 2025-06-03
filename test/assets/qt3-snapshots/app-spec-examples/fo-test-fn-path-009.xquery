let $emp :=
  <employee xml:id="ID21256">
    <empnr>E21256</empnr>
    <first>John</first>
    <last>Brown</last>
  </employee>

return fn:path($emp/empnr)
