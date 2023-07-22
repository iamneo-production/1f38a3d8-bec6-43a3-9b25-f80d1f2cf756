package com.example.springapp.service;

import com.example.springapp.model.Post;
import com.example.springapp.model.User;

import com.example.springapp.service.UserService;

import com.example.springapp.repository.PostRepository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostService {

    @Autowired
    private final UserService userService;
    private final PostRepository postRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post getPostById(int postId) {
        return postRepository.findById(postId).orElseThrow(() -> new IllegalArgumentException("Post not found"));
    }

    public List<Post> getPostsByUser(String userId) {
        User user = userService.getUserByUsername(userId);
        return postRepository.findByUser(user);
    }

    public Post createPost(Post post) {
        User user = userService.getUserByUsername(post.getUser().getUsername());
        post.setUser(user);
        post.setTitle(post.getTitle());
        post.setContent(post.getContent());
        post.setCreatedAt(post.getCreatedAt());
        post.setUpdatedAt(post.getUpdatedAt());
        return postRepository.save(post);
    }    

    public Post updatePost(int postId, Post updatedPost) {
        Post post = getPostById(postId);
        post.setTitle(updatedPost.getTitle());
        post.setContent(updatedPost.getContent());
        return postRepository.save(post);
    }

    @Transactional
    public void deletePost(int postId) {
        Post post = getPostById(postId);
        postRepository.delete(post);
    }

    @Transactional
    public void likePost(int postId, String username) {
        Post post = getPostById(postId);
        User user = userService.getUserByUsername(username);
        post.addLike(user);
        postRepository.save(post);
    }

    @Transactional
    public void unlikePost(int postId, String username) {
        Post post = getPostById(postId);
        User user = userService.getUserByUsername(username);
        post.removeLike(user);
        postRepository.save(post);
    }
}