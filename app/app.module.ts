import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UsersService } from 'src/servises/users.service';
import { PictursService } from 'src/servises/picturs.service';
import { CategoriesService } from 'src/servises/categories.service';
import { ShowPicturesComponent } from './components/show-pictures/show-pictures.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { ShowPicturesByCategoryComponent } from './components/show-pictures-by-category/show-pictures-by-category.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { MennegerComponent } from './components/menneger/menneger.component';
import { OnePictureOnClikComponent } from './components/one-picture-on-clik/one-picture-on-clik.component';
import { BlessComponent } from './components/bless/bless.component';
import { OopsComponent } from './components/oops/oops.component';
import { ShopingBasketComponent } from './components/shoping-basket/shoping-basket.component';
import { AddNewCategoryComponent } from './components/add-new-category/add-new-category.component';
import { AddNewPictureComponent } from './components/add-new-picture/add-new-picture.component';
import { DropDounComponent } from './components/drop-doun/drop-doun.component';
import { InvaitesService } from 'src/servises/invaites.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SignInComponent,
    SignUpComponent,
    ShowPicturesComponent,
    FormPageComponent,
    ShowPicturesByCategoryComponent,
    ShowUsersComponent,
    MennegerComponent,
    OnePictureOnClikComponent,
    BlessComponent,
    OopsComponent,
    ShopingBasketComponent,
    AddNewCategoryComponent,
    AddNewPictureComponent,
    DropDounComponent,
   
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsersService,PictursService,CategoriesService,InvaitesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
