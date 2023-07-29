package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springapp.model.Follower;

public interface FollowerRepository extends JpaRepository<Follower, Long> {
    // Define the findByFollowerIdAndFollowedId method
    Follower findByFollowerIdAndFollowedId(Long followerId, Long followedId);
}

