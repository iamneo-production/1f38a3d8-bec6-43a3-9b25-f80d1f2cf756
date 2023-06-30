package com.example.springapp.model;
import java.util.List;

public class CommentDTO {
    private int id;
    private String username;
    private String text;
    private String timestamp;
    private List<CommentDTO> replies;

    public CommentDTO() {
    }

    public CommentDTO(int id, String username, String text, String timestamp, List<CommentDTO> replies) {
        this.id = id;
        this.username = username;
        this.text = text;
        this.timestamp = timestamp;
        this.replies = replies;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public List<CommentDTO> getReplies() {
        return replies;
    }

    public void setReplies(List<CommentDTO> replies) {
        this.replies = replies;
    }
}
