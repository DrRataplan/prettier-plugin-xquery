declare function local:add ($arg1, $arg2, $arg3) {
  $arg1 + $arg2 + $arg3
};

fn:function-name(local:add(1, 2, ?))
