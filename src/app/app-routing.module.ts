import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        PagesRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
