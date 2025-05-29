declare variable $v := <a><b/><b/><b/></a>;

deep-equal($v//45, (45, 45, 45, 45))
