package com.academic.erp.alumniregistration.controller;

import com.academic.erp.alumniregistration.dto.LoginRequest;
import com.academic.erp.alumniregistration.dto.RegistrationRequest;
import com.academic.erp.alumniregistration.dto.SearchRequest;
import com.academic.erp.alumniregistration.entity.Alumni;
import com.academic.erp.alumniregistration.service.AlumniService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/alumni/")
public class AlumniController {
    @Autowired
    private AlumniService alumniService;

    @PostMapping("/login")
    public ResponseEntity<String> loginAlumni(@RequestBody LoginRequest loginRequest) {
        String token = alumniService.loginAlumni(loginRequest);
        if(token != null)
        {
            return ResponseEntity.ok(token);
        }
        return ResponseEntity.ok("Invalid Credential");
    }

    @PostMapping("register")
    public ResponseEntity<String> registerAlumni(@RequestBody RegistrationRequest registrationRequest) {
        return alumniService.registerAlumni(registrationRequest);
    }

    @PostMapping("search")
    public ResponseEntity<Alumni> searchAlumni(@RequestBody SearchRequest searchRequest) {
        return alumniService.searchAlumni(searchRequest);
    }
}
