import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroupDirective,
  NgForm,
  FormControl,
} from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-add-promocode',
  templateUrl: './add-promocode.component.html',
  styleUrls: ['./add-promocode.component.scss'],
})
export class AddPromocodeComponent implements OnInit {
  constructor(private fb: FormBuilder, private _adminService: AdminService) {}

  ngOnInit(): void {}

  newPromocode = this.fb.group({
    promoCode: ['', Validators.required],
    startDate: ['', Validators.required],

    endDate: ['', Validators.required],

    discountValue: ['', Validators.required],
  });
  addPromocode() {
    let promocode = {
      promoCode: this.newPromocode.value.promoCode,
      startDate: this.newPromocode.value.startDate,

      endDate: this.newPromocode.value.endDate,
      discountValue: this.newPromocode.value.discountValue,
    };
    if (this.newPromocode.valid) {
      this._adminService.addPromocode(promocode).subscribe(
        (response) => {
          console.log('============ data =============');

          console.log(response);
        },
        (e) => {
          console.log('============ error =============');

          console.log(e);
        },
        () => {
          console.log('done');
          alert('done');
        }
      );
    } else {
    }
  }
}
