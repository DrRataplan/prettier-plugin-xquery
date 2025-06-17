import schema namespace hat =  "http://www.w3.org/XQueryTest/hats" at  "../../../TestSources/hats.xsd";

declare function local:run () as attribute(size, hat:hatsize) {
  validate type hat:hatsize { attribute size { 8 } }
};

<e>{ local:run() }</e>
