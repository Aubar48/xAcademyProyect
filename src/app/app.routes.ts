import { Routes } from '@angular/router'; // Importa la interfaz Routes desde el módulo de enrutamiento de Angular.
import { MainComponent } from './core/main/main.component'; // Importa el componente principal.
import { NotFoundComponent } from './core/not-found/not-found.component'; // Importa el componente de página no encontrada.
import { ContactComponent } from './core/contact/contact.component'; // Importa el componente de contacto.
import { PricingComponent } from './core/pricing/pricing.component'; // Importa el componente de precios.
import { ServicesComponent } from './core/services/services.component'; // Importa el componente de servicios.
import { FeaturesComponent } from './core/features/features.component'; // Importa el componente de características.

export const routes: Routes = [ // Define las rutas de la aplicación.
    /*
    {
        path: '', // Ruta raíz.
        component: MainComponent // Se carga el MainComponent para la ruta raíz.
    },
    {
        path: 'home', // Ruta para 'home'.
        component: MainComponent // Se carga el MainComponent para la ruta 'home'.
    },
    {
        path: 'contact', // Ruta para 'contact'.
        component: ContactComponent // Se carga el ContactComponent para la ruta 'contact'.
    },
    {
        path: 'pricing', // Ruta para 'pricing'.
        component: PricingComponent // Se carga el PricingComponent para la ruta 'pricing'.
    },
    {
        path: 'services', // Ruta para 'services'.
        component: ServicesComponent // Se carga el ServicesComponent para la ruta 'services'.
    },
    {
        path: 'features', // Ruta para 'features'.
        component: FeaturesComponent // Se carga el FeaturesComponent para la ruta 'features'.
    },
    {
        path: '**', // Ruta comodín para manejar rutas no definidas.
        component: NotFoundComponent // Se carga el NotFoundComponent para rutas no encontradas.
    },
    */
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige la ruta raíz a 'home' si no se proporciona otra ruta.
    
    // Define rutas usando la carga de componentes (loadComponent).
    { path: 'home', loadComponent: () => import('./core/main/main.component').then(m => m.MainComponent) }, // Carga el MainComponent para la ruta 'home'.
    { path: 'contact', loadComponent: () => import('./core/contact/contact.component').then(m => m.ContactComponent) }, // Carga el ContactComponent para la ruta 'contact'.
    { path: 'pricing', loadComponent: () => import('./core/pricing/pricing.component').then(m => m.PricingComponent) }, // Carga el PricingComponent para la ruta 'pricing'.
    { path: 'services', loadComponent: () => import('./core/services/services.component').then(m => m.ServicesComponent) }, // Carga el ServicesComponent para la ruta 'services'.
    { path: 'features', loadComponent: () => import('./core/features/features.component').then(m => m.FeaturesComponent) }, // Carga el FeaturesComponent para la ruta 'features'.
    
    { path: '**', component: NotFoundComponent } // Ruta comodín que carga el NotFoundComponent si no hay coincidencias.
];
