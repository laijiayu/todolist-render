function errorHandle(res) {
  const headers = {
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "PATCH, POST, GET,OPTIONS,DELETE",
    "Content-Type": "application/json",
  }
  res.writeHead(400, headers)
  res.write(JSON.stringify({ status: "failed", message: "欄位未正確填寫 無此todoid" }))
  res.end()
}

module.exports = errorHandle
