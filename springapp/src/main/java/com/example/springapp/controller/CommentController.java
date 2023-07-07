package com.example.springapp.controller;

<<<<<<< HEAD
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.springapp.model.Post;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/{commentId}")
    public Comment getCommentById(@PathVariable int commentId) {
        return commentService.getCommentById(commentId);
    }

    @GetMapping("api/posts/{postId}")
    public List<Comment> getAllCommentsByPostId(@RequestParam int postId) {
        return commentService.getAllCommentsByPostId(postId);
    }

    @GetMapping
    public List<Comment> getAllComments() {
        return commentService.getAllComments();
    }

    @PostMapping
    public Comment createComment(@RequestBody Comment comment) {
        return commentService.createComment(comment);
    }

    @PutMapping
    public Comment updateComment(@RequestBody Comment comment) {
        return commentService.updateComment(comment);
    }

    @DeleteMapping("/{commentId}")
    public void deleteComment(@PathVariable int commentId) {
        commentService.deleteComment(commentId);
    }
}
=======
import com.example.springapp.model.Comment;
import com.example.springapp.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @GetMapping("/api/comments/{commentId}")
    public ResponseEntity<Comment> getCommentById(@PathVariable int commentId) {
        Comment comment = commentService.getCommentById(commentId);
        return ResponseEntity.ok(comment);
    }

    @GetMapping("/api/comments/post")
    public ResponseEntity<List<Comment>> getCommentsByPost(@RequestParam("postId") int postId) {
        List<Comment> comments = commentService.getCommentsByPost(postId);
        return ResponseEntity.ok(comments);
    }

    @GetMapping("/api/comments")
    public ResponseEntity<List<Comment>> getAllComments() {
        List<Comment> comments = commentService.getAllComments();
        return ResponseEntity.ok(comments);
    }

    @PostMapping("/api/comments")
    public ResponseEntity<Comment> createComment(@RequestBody Comment comment) {
        Comment createdComment = commentService.createComment(comment);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdComment);
    }

    @PutMapping("/api/comments/{postId}")
    public ResponseEntity<Comment> updateComment(@PathVariable int commentId, @RequestBody Comment updatedComment) {
        Comment comment = commentService.updateComment(commentId, updatedComment);
        return ResponseEntity.ok(comment);
    }

    @DeleteMapping("/api/comments/{commentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable int commentId) {
        commentService.deleteComment(commentId);
        return ResponseEntity.noContent().build();
    }

}
>>>>>>> Social-Media-Portal-pratikmandge
