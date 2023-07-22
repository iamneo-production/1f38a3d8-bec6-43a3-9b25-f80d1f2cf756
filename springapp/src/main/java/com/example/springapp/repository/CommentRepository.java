<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Project-Workspace-ukeerthi18
package com.example.springapp.repository;

import com.example.springapp.model.Comment;
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
<<<<<<< HEAD
=======
package com.example.springapp.repository;

import com.example.springapp.model.Comment;
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
>>>>>>> Project-Workspace-pratikmandge
=======
>>>>>>> Project-Workspace-ukeerthi18
