import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_Services/Auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptor } from './_Services/error.interceptor';
import { AlertifyService } from './_Services/alertify.service';
import { UserService } from './_Services/User.service';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemerDetailedComponent } from './members/memer-detailed/memer-detailed.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import {appRoutes} from './routes';
import { from } from 'rxjs';

// tslint:disable-next-line: typedef
export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListComponent,
      MessagesComponent,
      MemberCardComponent,
      MemerDetailedComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        // tslint:disable-next-line: object-literal-shorthand
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5001'],
        disallowedRoutes: ['localhost:5001/api/auth']
      }
    }),
    TabsModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [
    AuthService,
    ErrorInterceptor,
    AlertifyService,
    MemberDetailResolver,
    UserService,
    MemberListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
