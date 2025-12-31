try {
    $loginRes = Invoke-RestMethod -Uri "http://localhost:3000/auth/login" -Method Post -ContentType "application/json" -Body '{"email":"test@example.com","password":"password123"}'
    $token = $loginRes.access_token
    Write-Host "Got Token"

    $headers = @{ Authorization = "Bearer $token" }
    $body = '{"name":"Test Company PowerShell","rut":"99.999.999-9"}'
    
    $company = Invoke-RestMethod -Uri "http://localhost:3000/companies" -Method Post -ContentType "application/json" -Headers $headers -Body $body
    Write-Host "SUCCESS: Company Created"
    $company | ConvertTo-Json
} catch {
    Write-Host "ERROR: $($_.Exception.Message)"
    if ($_.Exception.Response) {
        Write-Host "Status: $($_.Exception.Response.StatusCode.value__)"
        $stream = $_.Exception.Response.GetResponseStream()
        $reader = New-Object System.IO.StreamReader($stream)
        Write-Host "Body: $($reader.ReadToEnd())"
    }
}