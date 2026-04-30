import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { LocationComponent } from './pages/location/location.component';
import { MemoriesComponent } from './pages/memories/memories.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'location', component: LocationComponent },
    { path: 'memories', component: MemoriesComponent },
    { path: 'rsvp', component: RsvpComponent },
    { path: 'about', component: AboutComponent },

    { path: '**', redirectTo: 'home' }
];

// RouterModule.forRoot(routes, { useHash: true })