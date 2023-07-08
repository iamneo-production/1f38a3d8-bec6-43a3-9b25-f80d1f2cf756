package com.example.springapp.repository;

import com.example.springapp.model.Comment;
<<<<<<< HEAD
import com.example.springapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByUserId(Long userId);
}
=======
import com.example.springapp.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer> {
    Optional<List<Comment>> findByPostId(int postId);
    List<Comment> findByPost(Post post);
}
>>>>>>> Social-Media-Portal-pratikmandge
