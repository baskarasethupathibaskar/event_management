import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PriceComponent } from './price/price.component';
import { ReviewComponent } from './review/review.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { VenueComponent } from './venue/venue.component';
import { InvitationComponent } from './invitation/invitation.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { FoodComponent } from './food/food.component';
import { PhotosComponent } from './photos/photos.component';
import { CustomfoodComponent } from './customfood/customfood.component';
import { AnimationComponent } from './animation/animation.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginformComponent } from './loginform/loginform.component';
import { DisplayComponent } from './display/display.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { Feedback1Component } from './feedback1/feedback1.component';
import { DjpartyComponent } from './djparty/djparty.component';
import { FunclupComponent } from './funclup/funclup.component';
import { PrewedComponent } from './prewed/prewed.component';
import { AdminComponent } from './admin/admin.component';
import { ContactdashboardComponent } from './contactdashboard/contactdashboard.component';
import { Review1Component } from './review1/review1.component';
import { PackagedashComponent } from './packagedash/packagedash.component';
import { Packagedash1Component } from './packagedash1/packagedash1.component';
import { EventupdateComponent } from './eventupdate/eventupdate.component';
import { Eventupdate1Component } from './eventupdate1/eventupdate1.component';
import { ImgdashComponent } from './imgdash/imgdash.component';
import { Imgdash1Component } from './imgdash1/imgdash1.component';

const routes: Routes = [
  {path:'venue',component:VenueComponent},
  {path:'display',component:DisplayComponent},
  {path:'anim',component:AnimationComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'foods',component:FoodComponent},
  {path:'customfood',component:CustomfoodComponent},
  {path:'invitation',component:InvitationComponent},
  {path:'photos',component:PhotosComponent},
  {path:'service',component:ServiceComponent},
  {path:'pay',component:PaymentComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'price',component:PriceComponent},
  {path:'review',component:ReviewComponent},
  {path:'contact',component:ContactComponent},
  {path:'footer',component:FooterComponent},
  {path:'login',component:LoginformComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'feedback1',component:Feedback1Component},
  {path:'djparty',component:DjpartyComponent},
  {path:'funclup',component:FunclupComponent},
  {path:'prewed',component:PrewedComponent},
  {path:'admin',component:AdminComponent},
  {path:'cdash',component:ContactdashboardComponent},
  {path:'r1',component:Review1Component},
  {path:'packdash',component:PackagedashComponent},
  {path:'packdash1',component:Packagedash1Component},
  {path:'eventupdate',component:EventupdateComponent},
  {path:'eventupdate1',component:Eventupdate1Component},
  {path:'imgupload',component:ImgdashComponent},
  {path:'imgupload1',component:Imgdash1Component}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    GalleryComponent,
    PriceComponent,
    ReviewComponent,
    ContactComponent,
    FooterComponent,
    PaymentComponent,
    VenueComponent,
    InvitationComponent,
    EntertainmentComponent,
    FoodComponent,
    PhotosComponent,
    CustomfoodComponent,
    AnimationComponent,
    LoginformComponent,
    DisplayComponent,
    FeedbackComponent,
    Feedback1Component,
    DjpartyComponent,
    FunclupComponent,
    PrewedComponent,
    AdminComponent,
    ContactdashboardComponent,
    Review1Component,
    PackagedashComponent,
    Packagedash1Component,
    EventupdateComponent,
    Eventupdate1Component,
    ImgdashComponent,
    Imgdash1Component,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,
    AppRoutingModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
