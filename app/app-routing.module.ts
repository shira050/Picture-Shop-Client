import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddNewCategoryComponent } from './components/add-new-category/add-new-category.component';
import { AddNewPictureComponent } from './components/add-new-picture/add-new-picture.component';
import { BlessComponent } from './components/bless/bless.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { MennegerComponent } from './components/menneger/menneger.component';
import { OnePictureOnClikComponent } from './components/one-picture-on-clik/one-picture-on-clik.component';
import { OopsComponent } from './components/oops/oops.component';
import { ShopingBasketComponent } from './components/shoping-basket/shoping-basket.component';
import { ShowPicturesByCategoryComponent } from './components/show-pictures-by-category/show-pictures-by-category.component';
import { ShowPicturesComponent } from './components/show-pictures/show-pictures.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


const routes: Routes = [
  // { path:'home', component:MaimComponent },
// { path:"Pictures"  ,component:ShowPicturesComponent},
{path:'sign/:name/:pass',component:FormPageComponent},
{path:'sign_in',component:SignInComponent},
{path:'kategory',component:ShowPicturesByCategoryComponent},
// {path:'/MyGames',component:}
{path:'users',component:ShowUsersComponent},
{path:'menneger',component:MennegerComponent},
{path:'onePicture/:id',component:OnePictureOnClikComponent},
{path:'Pictures/:id',component:ShowPicturesComponent},
{path:'sign/:nameUser/:passUser',component:FormPageComponent},
{path:'bless',component:BlessComponent},
{path:'oops',component:OopsComponent},
{path:'basket',component:ShopingBasketComponent},
{path:'newPic/:id',component:AddNewPictureComponent},
{path:'newC/:id',component:AddNewCategoryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
