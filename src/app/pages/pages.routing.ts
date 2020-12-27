import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductosComponent } from './productos/productos.component';


const routes: Routes = [
    { path: 'dashboard', component: PagesComponent, 
        children: [
            {path: '', component: DashboardComponent},
            {path: 'productos', component: ProductosComponent},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
