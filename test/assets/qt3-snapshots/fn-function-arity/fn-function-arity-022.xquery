declare function local:add ($arg1, $arg2, $arg3) {
  $arg1 + $arg2 + $arg3
};

fn:function-arity(local:add#3)
