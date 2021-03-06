import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssetTransferPage } from './asset-transfer';
import { TranslateModule} from '@ngx-translate/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Keyboard } from '@ionic-native/keyboard';
import { Clipboard } from '@ionic-native/clipboard';

@NgModule({
    declarations: [
        AssetTransferPage,
    ],
    imports: [
        IonicPageModule.forChild(AssetTransferPage),
        TranslateModule
    ],
    providers:[
        BarcodeScanner,
        Keyboard,
        Clipboard
    ],
    exports: [
        AssetTransferPage
    ]
})
export class AssetTransferPageModule { }
