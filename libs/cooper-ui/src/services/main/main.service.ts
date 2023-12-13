import { Injectable }               from '@angular/core';
// --------------------------------------------------------
import { CooperThemeService }        from '../theme/theme.service';
// --------------------------------------------------------
import { CooperMainServiceSettings } from './main-service-settings';

@Injectable({ providedIn: 'root' })
export class CooperMainService {

    constructor(
        private themeService: CooperThemeService,
    ) { }

    initialize(settings?: CooperMainServiceSettings): void {
        this.themeService.initialize(settings?.palettes || {});
    }

}
