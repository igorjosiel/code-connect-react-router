import { useState } from 'react';
import { http } from '../../api';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { Textarea } from '../../components/Textarea';
import styles from './newpost.module.css';

function createSlug(title) {
    return title
        .normalize("NFD")                  // Separa letras dos acentos
        .replace(/[\u0300-\u036f]/g, "")   // Remove os acentos
        .toLowerCase()                     // Converte para minúsculas
        .trim()                            // Remove espaços do início e fim
        .replace(/[^a-z0-9\s-]/g, "")      // Remove caracteres especiais
        .replace(/\s+/g, "-")              // Espaços viram hífens
        .replace(/-+/g, "-");              // Remove hífens duplicados
}

export const NewPost = () => {
    const [loading, setLoading] = useState(false);

    const onSubmit = (formData) => {
        const cover = formData.get('cover');
        const title = formData.get('title');
        const body = formData.get('body');
        const markdown = formData.get('markdown');

        try {
            setLoading(true);

            http.post("blog-posts", {
                cover,
                title,
                body,
                slug: createSlug(title),
                authorId: "cmuipmc7l00008b49k9z5afva",
                markdown
            }).then((response) => {
                console.log(response.data);
            }).finally(() => {
                setLoading(false);
            });
        } catch(error) {
            console.error('Erro ao criar/atualizar comentário:', error);
        }
    }

    return (
        <main className={styles.container}>
            <article className={styles.card}>
                <h2>Novo post</h2>

                <form className={styles.form} action={onSubmit}>
                    <div className={styles.field}>
                        <Label htmlFor="cover">Capa</Label>
                        <Input
                            id="cover"
                            name="cover"
                            type="url"
                            placeholder="https://..."
                        />
                    </div>

                    <div className={styles.field}>
                        <Label htmlFor="title">Título</Label>
                        <Input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Digite o título do post"
                        />
                    </div>

                    <div className={styles.field}>
                        <Label htmlFor="body">Post</Label>
                        <Textarea
                            id="body"
                            name="body"
                            placeholder="Escreva o conteúdo do post..."
                            rows={8}
                        />
                    </div>

                    <div className={styles.field}>
                        <Label htmlFor="markdown">Markdown</Label>
                        <Textarea
                            id="markdown"
                            name="markdown"
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
