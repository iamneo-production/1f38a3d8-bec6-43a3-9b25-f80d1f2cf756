package com.example.springapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.User;

public interface UserRepository extends JpaRepository<User, String> {
	public User findById(int userId);
	Optional<User> findByEmail(String email);
	Optional<User> findByUsername(String username);
	public boolean existsByUsername(String username);
	Optional<User> deleteByUsername(String username);
}
