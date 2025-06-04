import schema namespace res =  "http://schema.highwire.org/Publishing/Resource/qischema072";

declare function local:test () as schema-element(res:uni) {
  (validate { document {
        <res:uni
          xmlns:res="http://schema.highwire.org/Publishing/Resource/qischema072"
        >
          <res:link href="file:/content/journals/jacc/issues/1/1" />
          <res:link href="file:/content/journals/jacc/issues/1" />
          <res:link href="file:/content/journals/jacc/issues/1/1" />
        </res:uni>
      } })/*
};

local:test()
