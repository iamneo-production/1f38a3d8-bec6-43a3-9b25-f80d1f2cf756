public class Comment {

    private int id;
    private String text;
    private String createdDate;

    public Comment() {
    }

    public Comment(int id, String text, String createdDate) {
        this.id = id;
        this.text = text;
        this.createdDate = createdDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }
}
