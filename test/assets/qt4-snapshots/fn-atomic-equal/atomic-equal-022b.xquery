let $ns := "http://example.org"
return atomic-equal(QName($ns, "ns1:foo"), QName($ns, "ns2:foo"))
