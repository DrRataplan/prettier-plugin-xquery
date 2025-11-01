import module namespace test40 = "http://www.w3.org/TestModules/test40" at "http://www.w3.org/TestModules/test40";

document {
  <result>
    <A>{ test40:echo("x", "y", "z") }</A>
    <B>{ test40:echo("x", "y") }</B>
    <C>{ test40:echo("x") }</C>
    <D>{ test40:echo() }</D>
    <E>{ test40:echo() }</E>
    <F>{ test40:echo() }</F>
    <G>{ test40:echo() }</G>
  </result>
}
