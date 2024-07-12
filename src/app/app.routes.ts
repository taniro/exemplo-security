import {Routes} from '@angular/router';
import {SecureComponent} from "./components/secure/secure.component";
import {appAuthGuard} from "./app-auth.guard";
import {LoginComponent} from "./components/login/login.component";
import {InnerHtmlBindingComponent} from "./components/inner-html-binding/inner-html-binding.component";

export const routes: Routes = [{
  path: "secure", component: SecureComponent, canActivate: [appAuthGuard]
}
  , {
    path: "login", component: LoginComponent
  }
  ,
  {
    path: "binding", component: InnerHtmlBindingComponent
  }
];
