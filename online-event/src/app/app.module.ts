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
import { PaymentComponent } from './payment/payment.component';
import { AnimationComponent } from './animation/animation.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginformComponent } from './loginform/loginform.component';
import { DisplayComponent } from './display/display.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { Feedback1Component } from './feedback1/feedback1.component';
import { DjpartyComponent } from './djparty/djparty.component';
import { AdminComponent } from './admin/admin.component';
import { ContactdashboardComponent } from './contactdashboard/contactdashboard.component';
import { PackagedashComponent } from './packagedash/packagedash.component';
import { Packagedash1Component } from './packagedash1/packagedash1.component';
import { EventupdateComponent } from './eventupdate/eventupdate.component';
import { Eventupdate1Component } from './eventupdate1/eventupdate1.component';
import { ImgdashComponent } from './imgdash/imgdash.component';
import { Imgdash1Component } from './imgdash1/imgdash1.component';
import { HttpCallInterceptor } from './interceptor';
import { ToastrModule } from 'ngx-toastr';
import { FunclupComponent } from './funclup/funclup.component';
import { ConcersComponent } from './concers/concers.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { PrewedsComponent } from './preweds/preweds.component';
import { DanceComponent } from './dance/dance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    AnimationComponent,
    LoginformComponent,
    DisplayComponent,
    FeedbackComponent,
    Feedback1Component,
    DjpartyComponent,
    AdminComponent,
    ContactdashboardComponent,
    PackagedashComponent,
    Packagedash1Component,
    EventupdateComponent,
    Eventupdate1Component,
    ImgdashComponent,
    Imgdash1Component,
    FunclupComponent,
    ConcersComponent,
    BirthdayComponent,
    PrewedsComponent,
    DanceComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,
    BrowserAnimationsModule,AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCallInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
