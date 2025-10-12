import module namespace m = "http://www.w3.org/TestModules/libmodule2";

declare context item as xs:date := current-date();

. gt xs:date("1900-01-01")
