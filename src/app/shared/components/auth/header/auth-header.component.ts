import { Component } from "@angular/core";
import {  RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'app-auth-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './auth-header.component.html',
    styleUrls: ['./auth-header.component.scss']
})
export class AuthHeaderComponent {}
