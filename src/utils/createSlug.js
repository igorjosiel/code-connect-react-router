export default function createSlug(title) {
    return title
        .normalize("NFD")                  // Separa letras dos acentos
        .replace(/[\u0300-\u036f]/g, "")   // Remove os acentos
        .toLowerCase()                     // Converte para minúsculas
        .trim()                            // Remove espaços do início e fim
        .replace(/[^a-z0-9\s-]/g, "")      // Remove caracteres especiais
        .replace(/\s+/g, "-")              // Espaços viram hífens
        .replace(/-+/g, "-");              // Remove hífens duplicados
}
