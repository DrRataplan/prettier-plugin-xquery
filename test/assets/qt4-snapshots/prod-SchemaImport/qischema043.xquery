(: This test does not raise XQST0036, because it does not reference $hat:docvar. See W3C bugzilla 2546 :)
declare namespace hat = "http://www.fpml.org/2005/FpML-4-2";

import module "http://www.fpml.org/2005/FpML-4-2"(: at "xmod043a.xq" :) ;

$hat:twelve
