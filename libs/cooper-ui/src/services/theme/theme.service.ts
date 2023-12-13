import { Injectable }                     from "@angular/core";
// --------------------------------------------------------
import { CooperThemeColorPalette }        from "./theme-color-palette";
import { CooperThemeColorPalettes }       from "./theme-color-palettes";
import { CooperThemeDefaultAccentColor }  from "./default/theme-accent-color";
import { CooperThemeDefaultDangerColor }  from "./default/theme-danger-color";
import { CooperThemeDefaultGrayColor }    from "./default/theme-gray-color";
import { CooperThemeDefaultPrimaryColor } from "./default/theme-primary-color";
import { CooperThemeDefaultSuccessColor } from "./default/theme-success-color";
import { CooperThemeDefaultWarningColor } from "./default/theme-warning-color";

@Injectable({ providedIn: 'root' })
export class CooperThemeService {

    initialize(palettes: CooperThemeColorPalettes): void {
        this.primary = palettes.primary || CooperThemeDefaultPrimaryColor;
        this.gray = palettes.gray || CooperThemeDefaultGrayColor;
        this.accent = palettes.accent || CooperThemeDefaultAccentColor;
        this.danger = palettes.danger || CooperThemeDefaultDangerColor;
        this.warning = palettes.warning || CooperThemeDefaultWarningColor;
        this.success = palettes.success || CooperThemeDefaultSuccessColor;
    }

    // primary
    _primary!: CooperThemeColorPalette
    public get primary() : CooperThemeColorPalette {
        return this._primary
    }
    public set primary(palette: CooperThemeColorPalette) {
        this._primary = palette
        this.applyPalette(palette, 'primary')
    }

    // gray
    _gray!: CooperThemeColorPalette
    public get gray() : CooperThemeColorPalette {
        return this._gray
    }
    public set gray(palette: CooperThemeColorPalette) {
        this._gray = palette
        this.applyPalette(palette, 'gray')
    }

    // accent
    _accent!: CooperThemeColorPalette
    public get accent() : CooperThemeColorPalette {
        return this._accent
    }
    public set accent(palette: CooperThemeColorPalette) {
        this._accent = palette;
        this.applyPalette(palette, 'accent')
    }

    // danger
    _danger!: CooperThemeColorPalette
    public get danger() : CooperThemeColorPalette {
        return this._danger
    }
    public set danger(palette: CooperThemeColorPalette) {
        this._danger = palette
        this.applyPalette(palette, 'danger')
    }

    // warning
    _warning!: CooperThemeColorPalette
    public get warning() : CooperThemeColorPalette {
        return this._warning
    }
    public set warning(palette: CooperThemeColorPalette) {
        this._warning = palette
        this.applyPalette(palette, 'warning')
    }

    // success
    _success!: CooperThemeColorPalette
    public get success() : CooperThemeColorPalette {
        return this._success
    }
    public set success(palette: CooperThemeColorPalette) {
        this._success = palette;
        this.applyPalette(palette, 'success')
    }

    private applyPalette(palette: CooperThemeColorPalette, paletteName: string): void {
        const root = document.documentElement;
        for (const [key, value] of Object.entries(palette)) {
            root.style.setProperty(`--cooper-${ paletteName }-${ key }`, value);
        }
    }

}
