package com.example.springapp.controller;

import java.text.ParseException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.User;
import com.example.springapp.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/")
public class UserController{
	
	private final UserService userService;

	@PostMapping("/api/users")
		public ResponseEntity<User> createUser(@RequestBody User user) {
    	User createdUser = userService.createUser(user);
    	return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
	}


	@GetMapping("/api/users/{userId}")
    public ResponseEntity<User> getUserByUsername(@PathVariable("userId") String userId) {
        User user = userService.getUserByUsername(userId);
        return ResponseEntity.ok(user);
    }

	@GetMapping("/api/users")
	public ResponseEntity<List<User>> getAllUserDetails() throws ParseException {
		List<User> userList = userService.getAllUsers();
		return ResponseEntity.ok(userList);
	}

	@PutMapping("/api/users/{userId}")
    public ResponseEntity<String> updateUser(@PathVariable("userId") String userId, @RequestBody User updatedUser) {
        userService.editUser(updatedUser, userId);
        return ResponseEntity.ok("User updated successfully");
    }

	@DeleteMapping("/api/users/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable("userId") String userId) {
		if (userId != null){
			userService.deleteUser(userId);
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
    }
}
