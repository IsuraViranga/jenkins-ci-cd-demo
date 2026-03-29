pipeline {
    agent any
    
    triggers {
        githubPush()
    }
    
    tools {
        nodejs "NodeJS"
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Checkout Code') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building project...'
                sh 'npm run build || echo "No build script found, skipping"'
            }
        }
        stage('Archive Artifacts') {
            steps {
                echo 'Archiving files...'
                archiveArtifacts artifacts: '**/*', fingerprint: true
            }
        }
    }
    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Check logs.'
        }
    }
}