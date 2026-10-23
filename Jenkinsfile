pipeline {
    agent any

    options {
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Source code is checked out into the Jenkins workspace.'
            }
        }

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                powershell '''
                    $ErrorActionPreference = "Stop"
                    $port = 3000

                    # Stop a previous copy of this demo if it is listening on port 3000.
                    $connections = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
                    foreach ($connection in $connections) {
                        $processId = $connection.OwningProcess
                        if ($processId -and $processId -ne $PID) {
                            Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
                        }
                    }

                    Start-Sleep -Seconds 2
                    $node = (Get-Command node -ErrorAction Stop).Source
                    Start-Process -FilePath $node `
                        -ArgumentList "app.js" `
                        -WorkingDirectory "$env:WORKSPACE" `
                        -WindowStyle Hidden

                    $ready = $false
                    for ($i = 0; $i -lt 10; $i++) {
                        Start-Sleep -Seconds 1
                        try {
                            $response = Invoke-WebRequest -Uri "http://localhost:3000" -UseBasicParsing -TimeoutSec 2
                            if ($response.StatusCode -eq 200) {
                                $ready = $true
                                break
                            }
                        } catch {
                            # Retry while Node.js starts.
                        }
                    }

                    if (-not $ready) {
                        throw "Application did not respond on http://localhost:3000"
                    }

                    Write-Output "Deployment verified at http://localhost:3000"
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check Console Output for details.'
        }
    }
}
