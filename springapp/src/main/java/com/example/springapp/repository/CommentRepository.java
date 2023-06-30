import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository

public class CommentRepository {
    public List<Comment> getAllComments() {
        List<Comment> comments = new ArrayList<>();
        comments.add(new Comment(1, "Comment 1", "2023-07-30"));
        comments.add(new Comment(2, "Comment 2", "2023-06-30"));
        comments.add(new Comment(3, "Comment 3", "2023-06-30"));
        return comments;
    }
}
