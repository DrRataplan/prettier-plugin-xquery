declare default element namespace "http://typedecl";

namespace-uri-from-QName(node-name(exactly-one(<e>{
          attribute attr {
            ()
          }
        }/</e>/@attr))) eq ""
