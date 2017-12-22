import {RouterModule, Routes} from '@angular/router';
import { ControlComponent } from './control/control.component';
// import {}
 import {WelcomeaComponent} from './welcomea/welcomea.component';
 import {WelcomebComponent} from './welcomeb/welcomeb.component';
// import {WelcomecComponent} from './welcomec/welcomec.component';
import {Generic1Component} from './generic1/generic1.component';
import { EndPageComponent } from './end-page/end-page.component';
//ScreeningQuestionsComponent

export const ROUTES : Routes = [
    {
      path: '',
      redirectTo: 'control',
      pathMatch: 'full'
    }, {
      path: 'welcomea',
      component: WelcomeaComponent
    }, {
      path: 'welcomeb',
      component: WelcomebComponent
    },
    {
      path: 'generic1/:pageName', pathMatch:'full',
      component: Generic1Component
    }
    ,
    {
      path: 'exit', pathMatch:'full',
      component: EndPageComponent
    }
  ];