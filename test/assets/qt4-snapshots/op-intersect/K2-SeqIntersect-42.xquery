declare function local:function ($c as node()) {
  $c intersect $c
};

empty(local:function(document { () }))
