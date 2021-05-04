import { NgModule, Optional, SkipSelf } from '@angular/core';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from './icons/icons-provider.module';

@NgModule({
  declarations: [],
  imports: [IconsProviderModule, NzLayoutModule, NzMenuModule],
  exports: [IconsProviderModule, NzLayoutModule, NzMenuModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
