export interface Cat {
    url: string;
    id: string;
    rating?: number;
}

export interface CatList {
    images: Cat[];
}