import {Routes} from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {MemberListComponent} from '../app/members/member-list/member-list.component';
import { MemerDetailedComponent } from '../app/members/memer-detailed/memer-detailed.component';
import {MessagesComponent} from '../app/messages/messages.component';
import {ListComponent} from '../app/list/list.component';
import {AuthGuard} from '../app/_guards/auth.guard';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';

export const appRoutes: Routes = [
{path: '', component: HomeComponent},
{
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children:
    [
        {path: 'members', component: MemberListComponent , resolve: {Users: MemberListResolver }, canActivate: [AuthGuard]},
        {path: 'members/:id', component: MemerDetailedComponent, resolve: {User: MemberDetailResolver}},
        {path: 'messages', component: MessagesComponent},
        {path: 'list' , component: ListComponent},

    ]

},
{path: '**', pathMatch: 'full', redirectTo: ''},
];

