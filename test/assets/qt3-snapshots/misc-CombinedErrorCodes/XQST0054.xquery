declare namespace foo = "http://www.example.org/";

declare variable $a := foo:bar();

declare function foo:bar () {
  $a + 1
};

$a
