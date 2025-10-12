declare function local:myFunction () as xs:integer {
  subsequence((1, 2, "a string"), 3, 1)
};

fn:boolean(local:myFunction())
