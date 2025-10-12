declare decimal-format foo:decimal1 decimal-separator = "!" grouping-separator = "*";
declare decimal-format decimal1 decimal-separator = "*" grouping-separator = "!";

declare namespace foo = "http://foo.ns";

format-number(1234.567, "#*###*###!###", "foo:decimal1")
