
export class CustomValidator {

  static required = (control: any): object => {
    console.log(control)
    return  {required: true}
  }
}
