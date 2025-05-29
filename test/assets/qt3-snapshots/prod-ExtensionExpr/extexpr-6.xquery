declare namespace ns1 = "http://example.org/someweirdnamespace";

for $x in (# ns1:you-do-not-know-me-as-index #){/works/employee[12]/overtime}
return (# ns1:you-do-not-know-me-as-index #){/works/employee[12]/overtime}
