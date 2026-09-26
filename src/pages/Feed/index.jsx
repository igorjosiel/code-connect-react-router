import { useEffect, useState } from "react";
import { CardPost } from "../../components/CardPost";
import { http } from "../../api";
import styles from './feed.module.css';

export const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        http.get("blog-posts")
            .then(response => setPosts(response.data));
    }, []);

    return (
        <main className={styles.grid}>
            {posts.map(post => <CardPost key={post.slug} post={post} />)}
        </main>
    );
}
