pipeline {
    agent any

    environment {
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"
    }

    tools {
        nodejs "NodeJS_18"  // Asegúrate que en Jenkins tengas esta versión instalada
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                echo 'Installing NPM packages...'
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                echo 'Executing Cypress test suite...'
                sh '''
                    npx cypress run --reporter mochawesome \
                    --reporter-options "reportDir=mochawesome-report,overwrite=false,html=false,json=true"
                '''
            }
        }

        stage('Merge & Generate Report') {
            steps {
                echo 'Generating Mochawesome report...'
                sh '''
                    npx mochawesome-merge mochawesome-report/*.json > mochawesome.json
                    npx mochawesome-report-generator mochawesome.json
                '''
            }
        }

        stage('Archive Report') {
            steps {
                archiveArtifacts artifacts: 'mochawesome-report/mochawesome.html', fingerprint: true
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            cleanWs()
        }
    }
}
