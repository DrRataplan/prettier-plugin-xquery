export default [
	overWrite: 'Expr',
	name: 'ExistDB_UpdateExpr'
	additionalContents = [
		`ExistDB_UpdateExpr ::= 'update' 'insert' Expr ( 'into' | 'following' | 'preceding' ) ExprSingle`
	]
];
