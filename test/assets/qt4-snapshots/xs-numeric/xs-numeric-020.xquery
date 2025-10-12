declare function local:f ($n as xs:numeric) as xs:numeric {
  $n + 1
};

local:f(<a>255</a>)
