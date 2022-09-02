pipeline {
    agent any
    tools {
        nodejs '18.8.0'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'yarn test'
            }
        }
    }
}