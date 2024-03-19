import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { HeaderComponent } from './header/header.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { FormsModule } from '@angular/forms';
import { ValidateOnBlurDirective } from './validate-on-blur.directive';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserBlockComponent } from './all-users/user-block/user-block.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserdetailComponent } from './userdetail/userdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HeaderComponent,
    AllUsersComponent,
    ValidateOnBlurDirective,
    UserBlockComponent,
    UserdetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
