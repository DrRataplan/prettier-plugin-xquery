declare function local:f ($x as xs:long, $y as xs:NCName) as element(e)? {
  <e x="{ $x }" y="{ $y }" />
};

local:f#2 instance of function (xs:long, xs:NCName) as element()?,
local:f#2 instance of function (xs:long, xs:NCName) as element()*,
local:f#2 instance of function (xs:long, xs:NCName) as element(e)*,
local:f#2 instance of function (xs:long, xs:NCName) as element(e, xs:anyType?)*,
local:f#2 instance of function (xs:long, xs:NCName) as element(*, xs:anyType?)?,
local:f#2 instance of function (xs:long, xs:NCName) as element(*, xs:untyped)?
