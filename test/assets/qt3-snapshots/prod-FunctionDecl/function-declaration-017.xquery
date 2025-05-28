declare default element namespace "http://www.example.com/filesystem";

declare variable $v := 100;

declare function local:udf1 ($CUSTNO as xs:integer) {
  <empty> {
      $CUSTNO * $v
    } </empty>
};

local:udf1(10)
