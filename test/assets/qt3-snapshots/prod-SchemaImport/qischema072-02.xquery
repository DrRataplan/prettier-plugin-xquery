import schema namespace res =  "http://schema.highwire.org/Publishing/Resource/qischema072";

declare function local:test () as schema-element(res:abs) {
  validate {
    <res:abs
      xmlns:res="http://schema.highwire.org/Publishing/Resource/qischema072"
      > 
                    <res:link
        href="file:/content/journals/jacc/issues/1/1" /> 
                    <res:link
        href="file:/content/journals/jacc/issues/1" /> 
                    <res:link
        href="file:/content/journals/jacc" /> 
                </res:abs>
    }
};

local:test()
