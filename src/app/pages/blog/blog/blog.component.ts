import { Component } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Blog {
  id: number;
  attributes: {
    Title: string;
    Slug: string;
    Author:string;
    createdAt: string;
    Excerpt: string;
    Featured_Image?: {
      data: {
        attributes: {
          alternativeText: string,
          formats: {
            small: {
              url: string;
            }
          }
        }
      }[]
    }
  };
}

interface BlogResponse {
  data: Blog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ComponentsModule,HttpClientModule,CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogs: Blog[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.http.get<BlogResponse>('https://codevaycms-production.up.railway.app//api/blogs?populate=*').subscribe({
      next: (response) => {
        this.blogs = response.data;
        this.currentPage = response.meta.pagination.page;
        this.totalPages = response.meta.pagination.pageCount;
      },
      error: (error) => console.error('Error fetching blogs:', error)
    });
  }

  isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }

  goToPreviousPage(): void {
    if (!this.isFirstPage()) {
      this.currentPage--;
      this.loadBlogs();
    }
  }

  goToNextPage(): void {
    if (!this.isLastPage()) {
      this.currentPage++;
      this.loadBlogs();
    }
  }

}
