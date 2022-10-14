import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxBannerComponent } from 'igniteui-angular';

@Component({
    selector: 'app-banners',
    styleUrls: ['./banners.component.css'],
    templateUrl: './banners.component.html'
})

export class BannersComponent implements OnInit {
    @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
    public contentWidth = '384px';
    public imageUrls = ['https://www.infragistics.com/angular-demos-lob/assets/images/card/media/the_red_ice_forest.jpg',
        'https://www.infragistics.com/angular-demos-lob/assets/images/card/media/yosemite.jpg'];
    public ngOnInit() {
        this.banner.open();
    }
}

