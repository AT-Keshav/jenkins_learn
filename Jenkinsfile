pipeline {
  agent any

  environment {
    NODE_ENV = 'development'
  }

  tools {
    nodejs "Default" // match Node version installed in Jenkins
  }

  stages {
    stage('Clone') {
      steps {
        git branch: 'main', url: 'https://github.com/AT-Keshav/jenkins_learn.git'
        //git credentialsId: 'github-pat', url: 'https://github.com/AT-Keshav/jenkins_learn.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Lint & Test') {
      steps {
        sh 'npm run lint || echo "No lint script defined"'
        sh 'npm test || echo "No test script defined"'
      }
    }

    stage('Build') {
      steps {
        echo "No build step needed for backend"
      }
    }

    stage('Check Docker Access') {
        steps {
            sh 'whoami'
            sh 'docker ps'
        }
    }

    stage('Deploy') {
      steps {
        echo "Deploy step (e.g., Docker push or scp to server)"
        sh 'docker build -t keshav525141/node-back-end:0.1.0 .'
        sh 'docker push keshav525141/node-back-end:0.1.0'

      }
    }
  }

  post {
    always {
      echo 'Pipeline finished'
    }
    success {
      echo 'Build successful!'
    }
    failure {
      echo 'Build failed!'
    }
  }
}
