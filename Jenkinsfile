pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "npm install -g yarn"
                sh 'yarn install'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
    }
}