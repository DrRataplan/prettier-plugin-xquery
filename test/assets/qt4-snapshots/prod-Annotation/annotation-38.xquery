declare namespace a = "http://www.example.org/annotation";

declare %a:translucent("true") %a:translucent("false") variable $foo := "bar";

$foo
