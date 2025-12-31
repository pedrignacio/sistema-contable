try {
    $body = @{
        email = "test_register_final@example.com"
        password = "password123"
        firstName = "Test"
        lastName = "User"
        role = "CONTADOR"
    } | ConvertTo-Json

    $response = Invoke-RestMethod -Uri "http://localhost:3000/auth/register" -Method Post -ContentType "application/json" -Body $body
    Write-Host "Registration Successful"
    $response | ConvertTo-Json
} catch {
    Write-Host "Error: $($_.Exception.Message)"
    if ($_.Exception.Response) {
        $stream = $_.Exception.Response.GetResponseStream()
        $reader = New-Object System.IO.StreamReader($stream)
        Write-Host "Body: $($reader.ReadToEnd())"
    }
}