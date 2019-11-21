import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "cv2019";
  public selected_project = "pandabooks";
  public selected_project_role =
    "Initially my role is only as a developer, then I was promoted to act as the Lead of the project. My key responsibilities then were to manage a team of four, develop and maintain the project and communicate with clients.";
  public selected_project_tools = "Codeigniter, jQuery, MDBootstrap, MySQL";
  public selected_project_desc =
    "PandaBooks is an Enterprise Resource Planning web application that aims to ease and automate the business process of a company or business. PandaBooks can be customized based on the company or business process if requested.";

  tinderow() {
    this.selected_project = "tinderow";
    this.selected_project_role =
      "My key responsiblity in the project is to design the prototype based from the business model we have created and from that prototype is to create the web application.";
    this.selected_project_tools = "Adobe Xd, Angular";
    this.selected_project_desc =
      "Tinderow is an innovation tech venture by my brother and his colleagues, and I was invited to be part of the team to lead the technological side. Tinderow is an e-commerce web application, where users can buy produce directly from farmers.";
  }

  pandabooks() {
    this.selected_project = "pandabooks";
    this.selected_project_role =
      "Initially my role is only as a developer, then I was promoted to act as the Lead of the project. My key responsibilities then were to manage a team of four, develop and maintain the project and communicate with clients.";
    this.selected_project_tools = "Codeigniter, jQuery, MDBootstrap, MySQL";
    this.selected_project_desc =
      "PandaBooks is an Enterprise Resource Planning web application that aims to ease and automate the business process of a company or business. PandaBooks can be customized based on the company or business process if requested.";
  }
}
