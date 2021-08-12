import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroupDirective,
  NgForm,
  FormControl,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../../models/product';

import { AdminService } from '../../../services/admin/admin.service';
import { UploadImageService } from '../../../services/upload-image.service';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  msg: string = '';
  selectedFile: ImageSnippet | any;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _adminService: AdminService ,
    private imageService: UploadImageService
  ) {}

  ngOnInit(): void {}

  pdtData = this.fb.group({
    category: ['', Validators.required],

  
    sizes: [''],
    type: ['', Validators.required],
    priceBeforSale: [''],
    priceAfterSale: [''],
    availableInStock: ['', Validators.required],
    colors: [''],
    hasSale: ['true', Validators.required],
  });

  addnewPdt() {



    let newpdt: Product = {
      category: this.pdtData.value.category,
      products: [this.uploadTitle],

      sizes: [this.pdtData.value.sizes],
      colors: [this.pdtData.value.colors],
      type: this.pdtData.value.type,
      hasSale: this.pdtData.value.hasSale,
      priceBeforSale: this.pdtData.value.priceBeforSale,
      priceAfterSale: this.pdtData.value.priceAfterSale,
      AvailableInStock: this.pdtData.value.availableInStock,
    };
    if (this.pdtData.valid) {
      console.log(newpdt);
      this._adminService.addPdt(newpdt).subscribe(
        (response) => {
          console.log('============ data =============');

          console.log(response);
          alert("product id added ")
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
      this.msg = 'please check your data';
    }
  }
  showError() {
    this.toastr.error('Invalid email');
  }
  file:any =null
  uploadTitle:any

 
  handleFile(ev:any){
    this.file = ev.target.files
  
 
    if(this.file!=null){
      let formData = new FormData()
      formData.append('profile', this.file[0])
      formData.append('fileType','jpg')
      console.log(this.file[0])
      this.uploadTitle=formData
    }
 
  }
  upFile(x:any){
console.log(x);
if(this.file!=null){
  let formData = new FormData()
  formData.append('profile', this.file[0])
  formData.append('fileType','jpg')
}


  }
  // processFile(imageInput: any) {
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener('load', (event: any) => {

  //     this.selectedFile = new ImageSnippet(event.target.result, file);

  //     this.imageService.uploadImage(this.selectedFile.file).subscribe(
  //       (res) => {
        
  //       },
  //       (err) => {
        
  //       })
  //   });

  //   reader.readAsDataURL(file);
  // }
}
