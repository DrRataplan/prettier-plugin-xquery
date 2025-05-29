xquery version "1.0";

declare boundary-space preserve;
declare default order empty greatest;

declare namespace ns = "http://www.example.org/";

for $b in //book
stable order by xs:decimal($b/price[1]) empty greatest
return $b/title
