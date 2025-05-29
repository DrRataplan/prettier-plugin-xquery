import schema namespace fpml =  "http://www.fpml.org/2005/FpML-4-2"(:at "mini-fpml.xsd" :) ;

declare variable $v := "4.2";

declare function local:write () as schema-element(fpml:FpML) {
  validate strict {
    <FpML xmlns="http://www.fpml.org/2005/FpML-4-2" fpml-version="{
      $v
    }" xsi:type="ValuationDocument"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
                <header> 
                	<from>me</from> 
                	<to>you</to> 
                	<date>2005-10-25</date> 
                </header> 
                <market>cattle</market> 
                <value>0.02</value> 
            </FpML>
    }
};

local:write()
