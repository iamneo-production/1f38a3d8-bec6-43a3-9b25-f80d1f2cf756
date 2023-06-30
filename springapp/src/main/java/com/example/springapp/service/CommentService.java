package com.example.springapp.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService {

    private final List<CommentDTO> comments = new ArrayList<>();
    private int commentId = 1;

    public List<CommentDTO> getAllComments() {
        return comments;
    }

    public CommentDTO addComment(CommentDTO commentDTO) {
        commentDTO.setId(commentId++);
        commentDTO.setTimestamp(getCurrentTimestamp());
        comments.add(commentDTO);
        return commentDTO;
    }

    public CommentDTO addReplyToComment(int parentId, CommentDTO replyDTO) {
        CommentDTO parentComment = getCommentById(parentId);
        if (parentComment != null) {
            replyDTO.setId(commentId++);
            replyDTO.setTimestamp(getCurrentTimestamp());
            parentComment.getReplies().add(replyDTO);
            return replyDTO;
        }
        return null;
    }

    public void deleteComment(int id) {
        CommentDTO comment = getCommentById(id);
        if (comment != null) {
            comments.remove(comment);
        }
    }

    private CommentDTO getCommentById(int id) {
        for (CommentDTO comment : comments) {
            if (comment.getId() == id) {
                return comment;
            }
        }
        return null;
    }

    private String getCurrentTimestamp() {
        LocalDateTime currentDateTime = LocalDateTime.now();
        return currentDateTime.toString();
    }
}
