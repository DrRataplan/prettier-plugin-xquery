declare default function namespace "http://www..oracle.com/xquery/test";

declare function foo ($n as xs:integer) {
  <tr> {
    $n
  } </tr>
};

foo(4)
