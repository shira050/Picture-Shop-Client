import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { category } from 'src/app/classes/category';
@Injectable()
export class CategoriesService {
  category:category;
  categories:category[];
 categoriesURL="http://localhost:9207/api/Category";
  constructor(private http: HttpClient) {

  }
  
  getAll(): Observable<category[]> {

    return this.http.get<category[]>(this.categoriesURL+"/GetAllCategories")
  }
  getCategoryByCode(code:number): Observable<category> {
    return this.http.get<category>(this.categoriesURL+"?code="+code)
  }
 
  addNewCategory(newCategory: category): Observable<category[]> {
    return this.http.post<category[]>(this.categoriesURL, newCategory)
  }

  deleteCategory(code: number): Observable<category[]> {
    return this.http.delete<category[]>(this.categoriesURL+"/RemoveCategory/"+code)
  }
  updateCategory(c: category): Observable<category[]> {
    return this.http.put<category[]>(this.categoriesURL+"/UppdateCategory/"+c.codeCategory,c)
  }

}
