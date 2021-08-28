import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OrdernowComponent } from './ordernow/ordernow.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { VegitariansComponent } from './menu/vegitarians/vegitarians.component';
import { NonvegitariansComponent } from './menu/nonvegitarians/nonvegitarians.component';
import { SignupComponent } from './signup/signup.component';
import { MenuaComponent } from './menua/menua.component';
import { MenubComponent } from './menub/menub.component';
import { FooterComponent } from './footer/footer.component';
import { MenucComponent } from './menuc/menuc.component';
import { CartComponent } from './cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    OrdernowComponent,
    ReviewsComponent,
    MenuComponent,
    LoginComponent,
    VegitariansComponent,
    NonvegitariansComponent,
    SignupComponent,
    MenuaComponent,
    MenubComponent,
    FooterComponent,
    MenucComponent,
    CartComponent,
    PagenotfoundComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
