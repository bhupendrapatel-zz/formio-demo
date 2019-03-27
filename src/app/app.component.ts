import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "formDemo";
  @ViewChild("json") jsonElement?: ElementRef;
  public form: Object = { components: [] };
  onChange(event) {
    console.log(event.form);
    if (event.changed != "undefined") {
      this.jsonElement.nativeElement.innerHTML = "";
      this.jsonElement.nativeElement.appendChild(
        document.createTextNode(JSON.stringify(event.form, null, 4))
      );
    }
  }
}
