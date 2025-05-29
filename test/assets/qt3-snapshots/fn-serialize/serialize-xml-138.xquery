let $json :=
  '
                {
                  "method" : "xml",
                  "indent" : true, 
                  "use-character-maps" : {
                     "x" : "j",
                     "m" : "so",
                     "l" : "n"
                  }     
                }
            '
return serialize(<e>xml</e>, parse-json($json))
