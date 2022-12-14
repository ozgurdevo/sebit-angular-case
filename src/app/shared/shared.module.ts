import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { CategoryPageComponent } from '../pages/category-page/category-page.component';
import { PostDetailPageComponent } from '../pages/post-details-page/post-detail-page.component';
import { SearchResultPageComponent } from '../pages/search-result-page/search-result-page.component';
import { HomeCardComponent } from '../components/home-card/home-card.component';
import { PostCardComponent } from '../components/post-card/post-card.component';
import { SearchCardComponent } from '../components/search-card/search-card.component';
import { BaseService } from './services/base.service';
import { PostService } from './services/post-service';
import { AppRoutingModule } from '../app-routing.module';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  providers: [BaseService, PostService],
  declarations: [
    HomePageComponent,
    CategoryPageComponent,
    PostDetailPageComponent,
    SearchResultPageComponent,
    HomeCardComponent,
    PostCardComponent,
    SearchCardComponent,
    BreadcrumbComponent,
    ShortenPipe,
  ],
  imports: [CommonModule, AppRoutingModule, BrowserModule],
})
export class SharedModule {}
