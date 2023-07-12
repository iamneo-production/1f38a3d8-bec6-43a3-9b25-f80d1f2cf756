package com.example.springapp.service;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User getUserByUsername(String username) {
        Optional<User> optionalUser = userRepository.findByUsername(username);
        return optionalUser.orElseThrow(() -> new IllegalArgumentException("User not found"));
    }

    public User createUser(User newUser) {
        String username = newUser.getUsername();
        if (userRepository.existsByUsername(username)) {
            throw new IllegalArgumentException("Username already exists");
        }
        
        
        return userRepository.save(newUser);
    }

    public void editUser(User updatedUser, String username) {
        Optional<User> optionalUser = userRepository.findByUsername(username);
        User existingUser = optionalUser.orElseThrow(() -> new IllegalArgumentException("User not found"));

        if (updatedUser.getUsername() != null) {
            existingUser.setUsername(updatedUser.getUsername());
        }
        if (updatedUser.getPassword() != null) {
            existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        }
        if (updatedUser.getEmail() != null) {
            existingUser.setEmail(updatedUser.getEmail());
        }
        if (updatedUser.getBio() != null) {
            existingUser.setBio(updatedUser.getBio());
        }
        if (updatedUser.getDateOfBirth() != null) {
            try {
                existingUser.setDateOfBirth(updatedUser.getDateOfBirth());
            } catch (ParseException e) {
                e.printStackTrace();
            }
        }
        if (updatedUser.getProfilePicture() != null) {
            existingUser.setProfilePicture(updatedUser.getProfilePicture());
        }
        userRepository.save(existingUser);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Transactional
    public void deleteUser(String username) {
        userRepository.deleteByUsername(username);
    }
}
