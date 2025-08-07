package com.Student_Management.Student_project.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.Student_Management.Student_project.Model.Student;


public interface StudentRepository extends JpaRepository<Student, Long> {
}
