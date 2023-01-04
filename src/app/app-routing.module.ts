import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MedicineComponent } from './component/medicine/medicine.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ViewProductDetailsCategoryComponent } from './view-product-details-category/view-product-details-category.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';

const routes: Routes = [
 
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'medicine',
   component:MedicineComponent
  },
  {
      path:'view-product-details/:drug-code',
      component:ViewProductDetailsComponent
  },
  {
    path:'view-product-details-category',
    component:ViewProductDetailsCategoryComponent

  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full',
  },
  
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
