package com.example.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.springapp.model.Follower;
import com.example.springapp.repository.FollowerRepository;

@Service
public class FollowerService {
    private final FollowerRepository followerRepository;

    @Autowired
    public FollowerService(FollowerRepository followerRepository) {
        this.followerRepository = followerRepository;
    }

    public Follower followUser(Long followerId, Long followedId) {
        Follower follower = new Follower();
        follower.setFollowerId(followerId);
        follower.setFollowedId(followedId);
        return followerRepository.save(follower);
    }

    public void unfollowUser(Long followerId, Long followedId) {
        Follower follower = followerRepository.findByFollowerIdAndFollowedId(followerId, followedId);
        if (follower != null) {
            followerRepository.delete(follower);
        }
    }
}