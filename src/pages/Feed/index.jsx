import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { CardPost } from "../../components/CardPost";
import { http } from "../../api";
import styles from './feed.module.css';

export const Feed = () => {
    const location = useLocation();
    const { successNewPost } = location.state || {};

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        http.get("blog-posts")
            .then(response => setPosts(response.data));
    }, []);

    useEffect(() => {
        if (successNewPost) {
            console.log("Post criado com sucesso!");
        }
    }, [successNewPost]);

    return (
        <main className={styles.grid}>
            {posts.map(post => <CardPost key={post.slug} post={post} />)}
        </main>
    );
}
