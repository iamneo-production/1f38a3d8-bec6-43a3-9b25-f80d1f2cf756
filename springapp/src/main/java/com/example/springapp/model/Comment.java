package com.example.springapp.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String text;

    @Column(nullable = false)
    private LocalDateTime createdDate;

    @OneToMany(mappedBy = "parentComment", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Reply> replies = new ArrayList<>();


    public void addReply(Reply reply) {
        replies.add(reply);
        reply.setParentComment(this);
    }

    public void removeReply(Reply reply) {
        replies.remove(reply);
        reply.setParentComment(null);
    }
}
