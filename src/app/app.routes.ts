import { Routes } from '@angular/router';
import { PortfolioHome } from './pages/portfolio-home/portfolio-home';
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { Conocimientos } from './pages/conocimientos/conocimientos';
import { Formacion} from './pages/formacion/formacion';
import { Experiencia } from './pages/experiencia/experiencia';


export const routes: Routes = [
    {path:'',component:PortfolioHome},
    {path:'sobreMi',component:SobreMi},
    {path:'conocimientos',component:Conocimientos},
    {path:'formacion',component:Formacion},
    {path:'experiencia',component:Experiencia},
    {path:'**',redirectTo:''}
];
