interface Post {
    type: number;
    id?: number;
    title: string;
    content: string;
    views: number;
    likes: number;
    comments: number;
    created_at?: string;
    tags: string[];
}