package com.academic.erp.alumniregistration.repo;

import com.academic.erp.alumniregistration.entity.Alumni;
import com.academic.erp.alumniregistration.entity.AlumniEducation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AlumniEducationRepository extends JpaRepository<AlumniEducation, Long> {
    Optional<AlumniEducation> findByAlumniIdAndPassingYear(Long id, int i);
}
