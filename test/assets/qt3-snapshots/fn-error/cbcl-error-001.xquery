declare function local:ignore ($arg) {
  true()
};

local:ignore(fn:error())
