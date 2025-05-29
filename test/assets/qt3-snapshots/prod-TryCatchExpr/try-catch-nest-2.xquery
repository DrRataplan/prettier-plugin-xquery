try {
  fn:error()
} catch * {
  try {
    1 div 0
  } catch * {
    "Division by zero"
  }
}
