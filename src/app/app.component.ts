import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import {ProdutosService} from "./produto.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exemplo-security';

  constructor(private produtosService: ProdutosService) {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    let decodedToken = jwtDecode<JwtPayload & {name: string; email: string}>(token);

    console.log(decodedToken)
    console.log(decodedToken.name)

    //document.cookie = "jwt-token="+ token;
    localStorage.setItem("jwt-token", token);

    produtosService.list().subscribe(produtos => {console.log(produtos)})
  }
}
