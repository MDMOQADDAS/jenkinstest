pipeline {
    agent any

    stages {
        stage('SCM GitHub') {
            steps {
                
                git branch: 'main', url: 'https://github.com/MDMOQADDAS/jenkinstest.git'
            }
        }
       stage('Build'){
           steps{
              sh 'docker build -t myapplicationimage:$EXECUTOR_NUMBER .'
           }
       }
       
      stage('test'){
          steps{
              sh 'docker rm -f test || date'
              sh "docker run -d --name test -t -p 80:80 myapplicationimage:$EXECUTOR_NUMBER"
              sh "curl localhost | grep Application"
          }
        }
        stage("Centralized Container Registery"){
            steps{
                
                echo "Pushing the image myapplicationimage:$EXECUTOR_NUMBER to the Container Registery"
                
            }
        }

        stage("Deployment")
        steps{
            sh 'docker rm -f test || date'
            sh "docker run -d --name test -t -p 80:80 myapplicationimage:$EXECUTOR_NUMBER"
        }
    }
}