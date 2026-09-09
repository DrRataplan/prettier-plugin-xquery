declare variable $a as attribute()* := (
  attribute name1 { () }, attribute name2 { () }, attribute name3 { () }
);

<r><e>{ $a }</e><e>{ $a }</e></r>
