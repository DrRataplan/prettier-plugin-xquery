import schema namespace fpml =  "http://www.fpml.org/2005/FpML-4-2" at  "mini-fpml.xsd";

declare function local:write () as schema-element(fpml:FpML) {
  validate strict {
    <FpML
      xmlns="http://www.fpml.org/2005/FpML-4-2"
      fpml-version="4.2"
      xsi:type="ValuationDocument"
      > 
                    <header> <from>me</from> <to>you</to> <date>2005-10-253</date> </header> <market>cattle</market> <value>0.02</value> 
                </FpML>
    }
};

local:write()
