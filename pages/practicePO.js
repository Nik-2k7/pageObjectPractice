import { helper } from "codeceptjs";
const { I } = inject();

export class Practice_Automation extends helper{
  locators= {
    label_MyAccount:{xpath:'//a[contains(text(), "My Account")]'},
  }
}
