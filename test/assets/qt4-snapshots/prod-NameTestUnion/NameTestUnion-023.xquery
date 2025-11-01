import schema namespace q =  "http://example.com/ns/qualifiedAtts" at  "NameTestUnion/QualifiedAtts.xsd";

count(//element(q:*|q:f, q:fType))
