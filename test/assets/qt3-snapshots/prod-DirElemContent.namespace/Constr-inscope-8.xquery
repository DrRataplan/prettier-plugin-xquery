for $x in <parent4 xmlns="http://www.example.com/parent4"><child4 /></parent4>
return <new>{ $x//*:child4 }</new>
