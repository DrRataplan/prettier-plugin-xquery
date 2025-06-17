declare function local:f () {
  a
};

try { local:f() } catch err:XPDY0002 { true() }
