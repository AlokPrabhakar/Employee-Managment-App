package com.emp.Repositary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emp.Model.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
