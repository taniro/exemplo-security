import {Component, ElementRef} from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-inner-html-binding',
  standalone: true,
  imports: [],
  templateUrl: './inner-html-binding.component.html',
  styleUrl: './inner-html-binding.component.css'
})
export class InnerHtmlBindingComponent {
  // For example, a user/attacker-controlled value from a URL.
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  dangerousUrl: string;
  trustedUrl: SafeUrl;



  constructor(private sanitizer: DomSanitizer) {
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }
}
