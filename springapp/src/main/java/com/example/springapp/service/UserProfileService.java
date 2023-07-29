package com.example.springapp.service;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.springapp.model.UserProfile;
import com.example.springapp.repository.UserProfileRepository;

import org.springframework.stereotype.Service;

import java.util.List;

import lombok.RequiredArgsConstructor;

@Service

public class UserProfileService {

    private final UserProfileRepository userProfileRepository;
    
    @Autowired
    public UserProfileService(UserProfileRepository userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }
    public List<UserProfile> searchUserProfilesByUsername(String keyword) {
        return userProfileRepository.findByUsernameContainingIgnoreCase(keyword);
    }
}
