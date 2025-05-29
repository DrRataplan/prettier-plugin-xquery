import schema namespace res =  "http://schema.highwire.org/Publishing/Resource/qischema072";

declare function local:test () as schema-element(res:fix) {
  validate {
    <res:fix xmlns:res="http://schema.highwire.org/Publishing/Resource/qischema072"> wrong value </res:fix>
    }
};

local:test()
