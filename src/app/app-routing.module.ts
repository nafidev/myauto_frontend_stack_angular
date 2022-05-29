import { Routes, RouterModule } from '@angular/router';
import { AjouterRdvComponent } from './ajouter-rdv/ajouter-rdv.component';
import { CarComponent } from './car';
import { ChoixclientComponent } from './choixclient';
import { CustomiserComponent } from './customiser/customiser.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';


const routes: Routes = [
    { path: 'car', component: CarComponent },
    { path: 'choixclient', component: ChoixclientComponent},
    { path: 'ajouterRdv/:id', component: AjouterRdvComponent},
    { path: 'home', component: HomeComponent },
    { path: 'customiser', component: CustomiserComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'rendezvous', component: RendezvousComponent}

    



    // otherwise redirect to home
    
];

export const appRoutingModule = RouterModule.forRoot(routes);