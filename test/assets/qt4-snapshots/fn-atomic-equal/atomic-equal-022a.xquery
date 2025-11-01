let $ns := "http://example.org"
return atomic-equal(QName($ns, "foo"), QName($ns, "ns:foo"))
