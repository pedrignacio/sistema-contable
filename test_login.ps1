$response = Invoke-RestMethod -Uri "http://localhost:3000/auth/login" -Method Post -ContentType "application/json" -Body '{"email":"test@example.com","password":"password123"}'
$token = $response.access_token
Write-Host "TOKEN:$token"