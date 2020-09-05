import {Routes} from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {MemberListComponent} from '../app/member-list/member-list.component';
import {MessagesComponent} from '../app/messages/messages.component';
import {ListComponent} from '../app/list/list.component';
import {AuthGuard} from '../app/_guards/auth.guard';

export const appRoutes: Routes = [
{path: '', component: HomeComponent},
{
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children:
    [
        {path: 'members', component: MemberListComponent , canActivate: [AuthGuard]},
        {path: 'messages', component: MessagesComponent},
        {path: 'list' , component: ListComponent},

    ]

},
{path: '**', pathMatch: 'full', redirectTo: ''},
];

