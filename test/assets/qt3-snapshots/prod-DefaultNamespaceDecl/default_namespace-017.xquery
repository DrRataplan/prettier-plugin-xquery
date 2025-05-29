declare default function namespace "http://example.org";
declare default element namespace "http://www.example.com/filesystem";

declare variable $v := 100;

declare function udf1 ($CUSTNO as xs:integer) {
  <empty> {
    $CUSTNO * $v
  } </empty>
};

udf1(10)
