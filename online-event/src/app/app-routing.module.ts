import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AnimationComponent } from './animation/animation.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { ConcersComponent } from './concers/concers.component';
import { ContactComponent } from './contact/contact.component';
import { ContactdashboardComponent } from './contactdashboard/contactdashboard.component';
import { DanceComponent } from './dance/dance.component';
import { DisplayComponent } from './display/display.component';
import { DjpartyComponent } from './djparty/djparty.component';
import { EventupdateComponent } from './eventupdate/eventupdate.component';
import { Eventupdate1Component } from './eventupdate1/eventupdate1.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { Feedback1Component } from './feedback1/feedback1.component';
import { FooterComponent } from './footer/footer.component';
import { FunclupComponent } from './funclup/funclup.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ImgdashComponent } from './imgdash/imgdash.component';
import { Imgdash1Component } from './imgdash1/imgdash1.component';
import { LoginformComponent } from './loginform/loginform.component';
import { PackagedashComponent } from './packagedash/packagedash.component';
import { Packagedash1Component } from './packagedash1/packagedash1.component';
import { PaymentComponent } from './payment/payment.component';
import { PrewedsComponent } from './preweds/preweds.component';
import { PriceComponent } from './price/price.component';
import { ReviewComponent } from './review/review.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:'display',component:DisplayComponent},
  {path:'anim',component:AnimationComponent},
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
  {path:'concert',component:ConcersComponent},
  {path:'birthday',component:BirthdayComponent},
  {path:'prewedding',component:PrewedsComponent},
  {path:'dance',component:DanceComponent},
  {path:'admin',component:AdminComponent},
  {path:'cdash',component:ContactdashboardComponent},
  {path:'packdash',component:PackagedashComponent},
  {path:'packdash1',component:Packagedash1Component},
  {path:'eventupdate',component:EventupdateComponent},
  {path:'eventupdate1',component:Eventupdate1Component},
  {path:'imgupload',component:ImgdashComponent},
  {path:'imgupload1',component:Imgdash1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
