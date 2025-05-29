declare namespace frg = "http://schema.highwire.org/Publishing/Fragment";
declare namespace res = "http://schema.highwire.org/Publishing/Resource";

import schema namespace q =  "http://schema.highwire.org/Publishing/Fragment" at  "qischema032.xsd";

declare function local:f () {
  <e xmlns:frg="http://schema.highwire.org/Publishing/Different" frg:fragrance="4"/>/@*
};

let $e := ./*
return validate { element {"res:resource"} {
      $e/@*, attribute {"frg:fragility"} {
        3
      }, local:f(), $e/*
    } }
