import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { Block1Component } from './home/block1/block1.component';
import { Block2Component } from './home/block2/block2.component';
import { Block3Component } from './home/block3/block3.component';
import { Block4Component } from './home/block4/block4.component';
import { Block5Component } from './home/block5/block5.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service'
const appRoutes:Routes=[
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'dashboard',
      component:DashboardComponent
    },
    {
      path:'login',
      component: LoginComponent
    }
    ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Block1Component,
    Block2Component,
    Block3Component,
    Block4Component,
    Block5Component,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
