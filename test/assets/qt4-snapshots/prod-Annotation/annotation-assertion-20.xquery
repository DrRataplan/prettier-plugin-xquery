declare namespace eg = "http://example.com";

declare %public function local:three () as xs:integer {
  3
};

local:three#0 instance of %public %private function (xs:integer) as xs:integer
