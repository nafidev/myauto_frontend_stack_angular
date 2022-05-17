import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car';
import { ChoixclientComponent } from './choixclient';
import { CustomiserComponent } from './customiser/customiser.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register';

const routes: Routes = [
    { path: 'car', component: CarComponent },
    { path: 'choixclient', component: ChoixclientComponent },
    { path: '', component: HomeComponent },
    { path: 'customsier', component: CustomiserComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    



    // otherwise redirect to home
    
];

export const appRoutingModule = RouterModule.forRoot(routes);