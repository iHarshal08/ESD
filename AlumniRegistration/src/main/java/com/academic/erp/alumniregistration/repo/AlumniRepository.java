package com.academic.erp.alumniregistration.repo;

import com.academic.erp.alumniregistration.entity.Alumni;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AlumniRepository extends JpaRepository<Alumni, Long> {
//    Optional<Alumni> findByEmail(String email);
    Optional<Alumni> findByFirstNameAndLastNameAndEmail(String firstName, String lastName, String email);

    Optional<Alumni> findByEmailAndPassword(String email, String encode);

    Alumni findByEmail(String email);
}
