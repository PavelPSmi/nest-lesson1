import { Injectable } from '@nestjs/common';


export interface News {
    id?: number;
    title: string;
    description: string;
    author: string;
    countView?: number;
}
export interface NewsEdit {
    // id: number;
    title?: string;
    description?: string;
    author?: string;
    countView?: number;
}
function randomIntFromInterval(min: number, max: number) { // min and max included 
    min = Math.ceil(min)
    max = Math.ceil(max)

    return Math.floor(Math.random() * (max - min + 1) + min)
}
@Injectable()
export class NewsService {
    private readonly news: News[] = [
        {
            "id": 1,
            "title": 'Первая новость',
            "description": 'новость',
            "author": 'new',
            "countView": 12
        }
    ];

    create(news: News): News {
        const id = randomIntFromInterval(0, 99999);
        const finallNews = { ...news, id: id, }
        this.news.push(finallNews);
        return finallNews;
    }
    find(id: News['id']): News | undefined {
        return this.news.find((news) => news.id === id)
    }
    getAll(): News[] {
        return this.news
    }

    edit(id: number, news: NewsEdit): News | undefined {
        const indexRemoveNews = this.news.findIndex((news) => news.id === id);
        if (indexRemoveNews !== 1) {
            this.news[indexRemoveNews] = { ...this.news[indexRemoveNews], ...news }
        }
        return this.news[indexRemoveNews]
    }

    remove(id: News['id']): boolean {
        const indexRemoveNews = this.news.findIndex((news) => news.id === id);
        if (indexRemoveNews !== 1) {
            this.news.splice(indexRemoveNews, 1);
            return true;
        }
        return false;
    }
}
