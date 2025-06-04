let $d := document {
    <root xml:base="http://www.w3.org/">
      <implicit-base><child /></implicit-base>
      <explicit-base xml:base="http://www.w3.org/TR/xquery">
        <child />
      </explicit-base>
    </root>
  }
return let $y := <copy xml:base="http://www.example.org">{
        $d/root/implicit-base
      }</copy>
  return fn:base-uri(($y/implicit-base/child)[1])
