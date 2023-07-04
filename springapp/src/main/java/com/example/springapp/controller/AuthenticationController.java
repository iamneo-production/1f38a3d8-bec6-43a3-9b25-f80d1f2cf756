package com.example.springapp.controller;

import com.example.springapp.service.AuthenticationService;
import com.example.springapp.controller.AuthenticationRequest;
import com.example.springapp.controller.AuthenticationResponse;
import com.example.springapp.controller.RegisterRequest;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/")
public class AuthenticationController {
	
	private final AuthenticationService service;
<<<<<<< HEAD

=======
>>>>>>> b8422ba1637cb4bfc39458fe29bb3726c9ac931f
	@PostMapping("/api/register")
	public ResponseEntity<AuthenticationResponse> registerUser(@RequestBody RegisterRequest request) {
		return ResponseEntity.ok(service.registerUser(request));
	}
<<<<<<< HEAD

=======
	
>>>>>>> b8422ba1637cb4bfc39458fe29bb3726c9ac931f
	@PostMapping("/api/register/admin")
	public ResponseEntity<AuthenticationResponse> registerAdmin(@RequestBody RegisterRequest request) {
		return ResponseEntity.ok(service.registerAdmin(request));
	}

	@PostMapping("/api/authenticate")
	public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
		return ResponseEntity.ok(service.authenticate(request));
	}
}
