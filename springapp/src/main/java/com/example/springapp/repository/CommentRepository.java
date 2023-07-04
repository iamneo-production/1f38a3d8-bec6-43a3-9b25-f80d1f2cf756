package com.example.springapp.repository;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class CommentRepository {
    private final Map<Integer, Comment> comments = new HashMap<>();

    public Comment findById(int id) {
        return comments.get(id);
    }

    public List<Comment> findByPostId(int postId) {
        List<Comment> postComments = new ArrayList<>();
        for (Comment comment : comments.values()) {
            if (comment.getPostId() == postId) {
                postComments.add(comment);
            }
        }
        return postComments;
    }

    public List<Comment> findAll() {
        return new ArrayList<>(comments.values());
    }

    public void save(Comment comment) {
        comments.put(comment.getId(), comment);
    }

    public void update(Comment comment) {
        if (comments.containsKey(comment.getId())) {
            comments.put(comment.getId(), comment);
        }
    }

    public void delete(int id) {
        comments.remove(id);
    }
}
