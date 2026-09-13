import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { Textarea } from '../../components/Textarea';
import styles from './newpost.module.css';

export const NewPost = () => {
    return (
        <main className={styles.container}>
            <article className={styles.card}>
                <h2>Novo post</h2>

                <form className={styles.form}>
                    <div className={styles.field}>
                        <Label htmlFor="cover">Capa</Label>
                        <Input
                            id="cover"
                            type="url"
                            placeholder="https://..."
                        />
                    </div>

                    <div className={styles.field}>
                        <Label htmlFor="title">Título</Label>
                        <Input
                            id="title"
                            type="text"
                            placeholder="Digite o título do post"
                        />
                    </div>

                    <div className={styles.field}>
                        <Label htmlFor="post">Post</Label>
                        <Textarea
                            id="post"
                            placeholder="Escreva o conteúdo do post..."
                            rows={8}
                        />
                    </div>

                    <div className={styles.field}>
                        <Label htmlFor="markdown">Markdown</Label>
                        <Textarea
                            id="markdown"
                            placeholder="Digite o Markdown do post..."
                            rows={8}
                        />
                    </div>

                    <Button type="submit">
                        Criar post
                    </Button>
                </form>
            </article>
        </main>
    );
}
