import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Avatar } from "../Avatar";
import { ModalComment } from "../ModalComment";
import styles from './comment.module.css';
import { IconButton } from "../IconButton";

export const Comment = ({ comment, onDelete }) => {
    const { user } = useAuth();
    const [text, setText] = useState(comment.text);

    const isOwner = user && user.id == comment.author.id;

    const handleEdit = (newComment) => {
        setText(newComment.text);
    }

    return (
        <div className={styles.comment}>
            <Avatar author={comment.author} />
            <strong>@{comment.author.name}</strong>
            <p>{comment.text}</p>
            <div className={styles.divider} />
            {isOwner && (
                <ModalComment
                    isEditing
                    onSuccess={handleEdit}
                    defaulValue={text}
                    commentId={comment.id}
                />
            )}
            {isOwner && <IconButton onClick={() => onDelete(comment.id)}>excluir</IconButton>}
        </div>
    );
}
