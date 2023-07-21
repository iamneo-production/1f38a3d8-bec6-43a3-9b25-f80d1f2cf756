<<<<<<< HEAD
package com.example.springapp.controller;

import java.text.ParseException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.springapp.model.Post;
import com.example.springapp.model.User;
import com.example.springapp.service.PostService;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping("api/posts")
    public ResponseEntity<Post> createPost(@RequestBody Post post,@RequestParam("imageFile") MultipartFile imageFile) {
        Post createdPost = postService.createPost(post,imageFile);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPost);
    }
    
    @GetMapping("api/posts/{postId}")
    public ResponseEntity<Post> getPostById(@PathVariable int postId) {
        Post post = postService.getPostById(postId);
        return ResponseEntity.ok(post);
    }

    @PutMapping("api/posts/{postId}")
    public ResponseEntity<Post> updatePost(@PathVariable int postId, @RequestBody Post updatedPost) {
        Post post = postService.updatePost(postId, updatedPost);
        return ResponseEntity.ok(post);
    }

    @DeleteMapping("api/posts/{postId}")
    public ResponseEntity<Void> deletePost(@PathVariable int postId) {
        postService.deletePost(postId);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("api/posts/user")
    public ResponseEntity<List<Post>> getPostsByUser(@RequestParam("username") String username) {
        List<Post> posts = postService.getPostsByUser(username);
        return ResponseEntity.ok(posts);
    }
    
    @GetMapping("api/posts")
    public ResponseEntity<List<Post>> getAllPosts() {
        List<Post> posts = postService.getAllPosts();
        return ResponseEntity.ok(posts);
    }
}
=======
package com.example.springapp.controller;

import java.text.ParseException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.springapp.model.Post;
import com.example.springapp.model.User;
import com.example.springapp.service.PostService;
import org.springframework.web.bind.annotation.CrossOrigin;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "https://8081-defbdcccffddcdafbacfedaceeaeaadbdbabf.project.examly.io")
@RequestMapping("/")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping("api/posts")
    public ResponseEntity<Post> createPost(@RequestBody Post post) {
        Post createdPost = postService.createPost(post);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPost);
    }
    
    @GetMapping("api/posts/{postId}")
    public ResponseEntity<Post> getPostById(@PathVariable int postId) {
        Post post = postService.getPostById(postId);
        return ResponseEntity.ok(post);
    }

    @PutMapping("api/posts/{postId}")
    public ResponseEntity<Post> updatePost(@PathVariable int postId, @RequestBody Post updatedPost) {
        Post post = postService.updatePost(postId, updatedPost);
        return ResponseEntity.ok(post);
    }

    @DeleteMapping("api/posts/{postId}")
    public ResponseEntity<Void> deletePost(@PathVariable int postId) {
        postService.deletePost(postId);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("api/posts/user")
    public ResponseEntity<List<Post>> getPostsByUser(@RequestParam("username") String username) {
        List<Post> posts = postService.getPostsByUser(username);
        return ResponseEntity.ok(posts);
    }
    
    @GetMapping("api/posts")
    public ResponseEntity<List<Post>> getAllPosts() {
        List<Post> posts = postService.getAllPosts();
        return ResponseEntity.ok(posts);
    }
}
>>>>>>> Project-Workspace-pratikmandge
