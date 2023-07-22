package com.example.springapp.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import com.example.springapp.model.Follower;
import com.example.springapp.service.FollowerService;

@RestController
@RequestMapping("/api/users")
public class FollowerController {

    private final FollowerService followerService;

    @Autowired
    public FollowerController(FollowerService followerService) {
        this.followerService = followerService;
    }

    @PostMapping("/follow")
    public ResponseEntity<String> followUser(@RequestParam Long followerId, @RequestParam Long followedId) {
        try {
            followerService.followUser(followerId, followedId);
            return ResponseEntity.ok("User followed successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error following user.");
        }
    }

    @PostMapping("/unfollow")
    public ResponseEntity<String> unfollowUser(@RequestParam Long followerId, @RequestParam Long followedId) {
        try {
            followerService.unfollowUser(followerId, followedId);
            return ResponseEntity.ok("User unfollowed successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error unfollowing user.");
        }
    }
}
