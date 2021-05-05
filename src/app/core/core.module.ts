import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { environment } from 'src/environments/environment';
import { IconsProviderModule } from './icons/icons-provider.module';
import { counterReducer } from './store/counter.reducer';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ count: counterReducer }),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          maxAge: 25,
        }),
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
  ],
  exports: [IconsProviderModule, NzLayoutModule, NzMenuModule, NzButtonModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
