declare namespace hat = "http://www.fpml.org/2005/FpML-4-2";

import module "http://www.fpml.org/2005/FpML-4-2";

if (exists($hat:docvar)) then
  <a />
else
  <b />
