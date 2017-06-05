import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ROUTES } from './header-routes.config';
import { MenuType } from './header.metadata';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
    
})
export class HeaderComponent implements OnInit {
    public leftMenus: any[];
    public rightMenus: any[];
    public rightMenuOutlets: any[];
    isCollapsed = true;
    constructor(private translate: TranslateService) { }

    ngOnInit() {
        this.leftMenus = ROUTES.filter(menuItem => menuItem.menuType === MenuType.LEFT);
        this.rightMenus = ROUTES.filter(menuItem => menuItem.menuType === MenuType.RIGHT);
        this.rightMenuOutlets = ROUTES.filter(menuItem => menuItem.menuType === MenuType.OUTLETRIGHT);
    }

    public getMenuItemClasses(menuItem: any) {
    return {
      'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.LEFT
        };
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
