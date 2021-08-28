import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NonvegitariansComponent } from './menu/nonvegitarians/nonvegitarians.component';
import { VegitariansComponent } from './menu/vegitarians/vegitarians.component';
import { MenuaComponent } from './menua/menua.component';
import { MenubComponent } from './menub/menub.component';
import { MenucComponent } from './menuc/menuc.component';
import { OrdernowComponent } from './ordernow/ordernow.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'ordernow' , component:OrdernowComponent},
  {path:'contactus' , component:ContactusComponent},
  {path:'reviews', component:ReviewsComponent},
  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'menua' , component:MenuaComponent},
  {path:'menub' , component:MenubComponent},
  {path:'menuc' , component:MenucComponent},
  {path:'footer' , component:FooterComponent},
  {path: 'cart' , component:CartComponent},
  {path:'menu' , component:MenuComponent, children:[
  {path:'vegetarians' , component:VegitariansComponent},
  {path:'nonvegetarians' , component:NonvegitariansComponent},
   
  ]},
 {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
