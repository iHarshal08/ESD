package com.harshal.ESD.service;

import com.harshal.ESD.dto.CustomerRequest;
import com.harshal.ESD.dto.LoginRequest;
import com.harshal.ESD.entity.Customer;
import com.harshal.ESD.helper.JwtUtil;
import com.harshal.ESD.mapper.CustomerMapper;
import com.harshal.ESD.repo.CustomerRepo;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepo customerRepo;
    private final CustomerMapper customerMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    public String createCustomer(CustomerRequest request) {
        Customer customer = customerMapper.toEntity(request);
        customer.setPassword(passwordEncoder.encode(request.password()));
        customerRepo.save(customer);
        return "Customer created successfully";
    }

    public String login(LoginRequest request) {
        Optional<Customer> customerOptional = customerRepo.findByEmail(request.email());

        if (customerOptional.isPresent()) {
            Customer customer = customerOptional.get();
            if (passwordEncoder.matches(request.password(), customer.getPassword())) {//raw string, encrypt. pass
                return jwtUtil.generateToken(customer.getEmail());
            }
        }
        throw new RuntimeException("Invalid credentials");
    }
}
