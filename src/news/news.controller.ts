import { NewsService, News, NewsEdit } from './news.service';
import { Controller, Get,Put,Param,Post,Body,Delete } from '@nestjs/common';
import path from 'path';

@Controller('news')
export class NewsController {
    constructor(private readonly NewsService:NewsService){

    }
    @Get('/detail/:id')
    getNews(@Param('id') id: string):News{
        let idInt = parseInt(id)
        return this.NewsService.find(idInt)
    }
    @Get('/all')
    getAll():News[]{
        const news = this.NewsService.getAll();
        return news
    }
    @Post()
    create(@Body() news: News):News{
        return this.NewsService.create(news)
    }
    @Delete('/:id')
    remove(@Param('id') id: string):string{
        let idInt = parseInt(id)
        const isRemove=this.NewsService.remove(idInt);
        return isRemove?'News delete':'invite news id'
    }
    @Put('/:id')
    edit(@Param('id') id: string,@Body() news: NewsEdit):News{
        let idInt = parseInt(id)
        return this.NewsService.edit(idInt,news)
    }
}
