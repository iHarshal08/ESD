package com.academic.erp.alumniregistration.dto;

public record RegistrationRequest (
        String firstName,
        String lastName,
        String email,
        String password,
        String contactNo,
        String degree,
        int passingYear,
        int joiningYear,
        String collegeName,
        String organization,
        String position,
        String address,
        String joiningDate,
        String leavingDate
){}