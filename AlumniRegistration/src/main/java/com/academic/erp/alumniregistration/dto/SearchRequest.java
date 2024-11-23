package com.academic.erp.alumniregistration.dto;

public record SearchRequest (
        int passingYear,
        String firstName,
        String lastName,
        String email
){
}
