import schema namespace fpml =  "http://www.fpml.org/2005/FpML-4-2" at  "mini-fpml.xsd";

declare function local:write () as schema-element(fpml:FpML) {
  validate strict {
    <FpML xmlns="http://www.fpml.org/2005/FpML-4-2" fpml-version="4.2" xmlns:xs="http://www.w3.org/2001/XMLSchema" xsi:type="xs:anyType"> 
                    <header> <from>me</from> <to>you</to> <date>2005-10-25</date> <country>us</country> </header> 
                    <market>cattle</market> <value>0.02</value> </FpML>
    }
};

local:write()
