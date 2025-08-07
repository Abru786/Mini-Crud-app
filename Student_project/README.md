# Student Management System

A simple web-based CRUD application to manage student records using Spring Boot, Spring Data JPA, MySQL, and a Bootstrap-powered HTML UI.

---

## Features

- Add, view, update, and delete student records
- RESTful API with Spring Boot
- MySQL or H2 database support
- Responsive UI with Bootstrap
- Clean layered architecture (Controller → Service → Repository)

---

## Technologies Used

- Java 21
- Spring Boot 3.x
- Spring Data JPA
- MySQL / H2 Database
- Maven
- Lombok
- Bootstrap 5 (UI)
- Vanilla JavaScript

---

## Project Structure

```
src/
  main/
    java/
      com/
        Student_Management/
          Student_project/
            controller/
            service/
            repository/
            Model/
    resources/
      static/
        students.html
        script.js
        style.css
      application.properties
```

---

## Getting Started

### 1. Clone the Repository

```sh
git clone <your-repo-url>
cd Student_project
```

### 2. Configure the Database

Edit `src/main/resources/application.properties` for your MySQL or H2 settings.

Example for MySQL:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/abrardb
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update
```

### 3. Build & Run the Project

```sh
./mvnw spring-boot:run
```
or on Windows:
```sh
mvnw.cmd spring-boot:run
```

---

## Using the Application

1. Open your browser and go to:  
   [http://localhost:8080/students.html](http://localhost:8080/students.html)
2. Use the form to add, edit, or delete students.

---

## API Endpoints

- `GET /students` – List all students
- `GET /students/{id}` – Get a student by ID
- `POST /students` – Add a new student
- `PUT /students/{id}` – Update a student
- `DELETE /students/{id}` – Delete a student

---

## License

This project is for educational purposes.