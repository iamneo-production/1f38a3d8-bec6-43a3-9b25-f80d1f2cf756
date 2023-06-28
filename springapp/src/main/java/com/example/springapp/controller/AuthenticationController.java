package com.example.springapp.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AuthenticationController {
	@Autowired
	private final AuthenticationService service;

	@PostMapping("/register")
	public ResponseEntity<AuthenticationResponse> userRegister(@RequestBody RegisterRequest request) {
		return ResponseEntity.ok(service.registerUser(request));
	}

	@PostMapping("/register/admin")
	public ResponseEntity<AuthenticationResponse> adminRegister(@RequestBody RegisterRequest request) {
		return ResponseEntity.ok(service.registerAdmin(request));
	}

	@PostMapping("/authenticate")
	public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
		return ResponseEntity.ok(service.authenticate(request));
	}
}
