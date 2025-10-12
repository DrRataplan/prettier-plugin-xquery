parse-json(
  '
          {
             "x" : [1,2,[]],
             "y" : { "a" : {} },
             "x" : [3,4,[]],
             "y" : { "c" : [], "c" : 1, "c" : {} }
          }
        ',
  map {"duplicates": "use-last"}
)
