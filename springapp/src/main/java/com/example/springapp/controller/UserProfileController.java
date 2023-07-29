package com.example.springapp.controller;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.springapp.model.UserProfile;
import com.example.springapp.service.UserProfileService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "https://8081-ecaabbeeceeacfddcdafbacfedaceeaeaadbdbabf.project.examly.io")

@RequestMapping("/api/userProfiles")
public class UserProfileController {

    private final UserProfileService userProfileService;

    @Autowired
    public UserProfileController(UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }
    

    @GetMapping
    public ResponseEntity<List<UserProfile>> searchUserProfilesByUsername(@RequestParam String keyword) {
        List<UserProfile> userProfiles = userProfileService.searchUserProfilesByUsername(keyword);
        return new ResponseEntity<>(userProfiles, HttpStatus.OK);
    }
}