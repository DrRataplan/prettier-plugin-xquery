let $grammar := parse-xml(
  "<ixml><rule name='date'><alt><nonterminal name='year'/>
           <literal tmark='-' string='-'/><nonterminal name='month'/><literal tmark='-' string='-'/>
           <nonterminal name='day'/></alt></rule><rule name='year'><alt><nonterminal name='d'/>
           <nonterminal name='d'/><nonterminal name='d'/><nonterminal name='d'/></alt></rule>
           <rule name='month'><alt><literal string='0'/><nonterminal name='d'/></alt><alt>
           <literal string='1'/><inclusion><member string='0'/><member string='1'/><member string='2'/>
           </inclusion></alt></rule><rule name='day'><alt><inclusion><member string='0'/>
           <member string='1'/><member string='2'/></inclusion><nonterminal name='d'/></alt>
           <alt><literal string='3'/><inclusion><member string='0'/><member string='1'/>
           </inclusion></alt></rule><rule mark='-' name='d'><alt><inclusion>
           <member from='0' to='9'/></inclusion></alt></rule></ixml>"
)
let $parse := invisible-xml($grammar)
return $parse("2023-10-31")
