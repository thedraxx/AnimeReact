import { recomends } from "../data/Recomends"

// Toma el ID que fue enviado desde Recomend.jsx gracias al uso de useParams y busca en el array de recomends el ID y lo retorna
export const SearchRecomendbyId = (id = "") => {
    return recomends.find(rec => rec.id === id)
}

