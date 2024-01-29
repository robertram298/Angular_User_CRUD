import {RouterModule, Routes} from  "@angular/router"
import { UsersComponent } from "./users/users.component"
import {NgModule} from "@angular/core"
const route:Routes =[{
    path:"users",component:UsersComponent, 
},
{
    path:"lazy",loadChildren: () => 

      import('./shared/shared.module').then( 

        (m) => m.SharedModule 

      ),
}]
@NgModule({
    imports:[RouterModule.forRoot(route)]
})
export class TestRoutingModule{}