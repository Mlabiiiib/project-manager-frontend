# Project Manager
This application help user manage their projects.

## Features
The project offers the following features:
- View all projects by their status
- View project by id
- Create project
- Update project
- Delete project

## Used technologies
- Git
- JDK 17
- Maven 3
- Spring Boot
- Spring: Web, JPA
- Lombok
- Docker

## Run project locally
### Prerequisites
In order to run the project in your local machine, you need the following prerequisites:
- JDK 17
- Maven 3
- Docker Desktop
- npm
- Node
- ports 3000 and 8080 available (in case they are used, update front and backend projects with available ports)

### Run the project locally
#### Clone the projects
- create a folder (project-manger for example)
- navigate to this folder
- open cmd line and clone project-manager-docker, project-manager-backend and project-manager-frontend
```
git clone https://github.com/Mlabiiiib/project-manager-docker.git
```
```
git clone https://github.com/Mlabiiiib/project-manager-backend.git
```
```
git clone https://github.com/Mlabiiiib/project-manager-frontend.git
```

#### Docker
- Run docker desktop
- navigate to the project 'project-manager-docker'
- open cmd line and run
```
docker-compose up
```

#### Backend
- navigate to the project 'project-manager-backend'
- open cmd line and run
```
mvn clean install
```

```
mvn spring-boot:run
```
#### Frontend
- navigate to the project 'project-manager-frontend'
- open cmd line and run
```
npm install
```

```
npm start
```