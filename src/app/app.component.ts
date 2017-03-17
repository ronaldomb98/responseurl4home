import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IPayU_response } from './PayU_response';
import { payuRespons } from './payuResponse';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
      private Payu_response: IPayU_response;
    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    public ngOnInit() {
        this.init_Payu_response();
        this.get_query_params_from_url();
    }


    private get_query_params_from_url(): void {
        this.activatedRoute.queryParams.subscribe(
            (params: Params) => {
                this.Payu_response = {
                    description: params[payuRespons.description],
                    referenceCode: params[payuRespons.referenceCode],
                    TX_VALUE: params[payuRespons.TX_VALUE],
                    currency: params[payuRespons.currency],
                    processingDate: params[payuRespons.processingDate],
                    lapPaymentMethod: params[payuRespons.lapPaymentMethod],
                    transactionId: params[payuRespons.transactionId]
                };
            }
        );
    }

    private init_Payu_response(): void {
        this.Payu_response = {
            description: '',
            referenceCode: '',
            TX_VALUE: 0,
            currency: '',
            processingDate: '',
            lapPaymentMethod: '',
        };
    }
}
