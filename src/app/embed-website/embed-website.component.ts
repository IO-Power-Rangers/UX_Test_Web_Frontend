import {Component, OnInit, SecurityContext} from '@angular/core';
import {DomSanitizer, SafeHtml, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-embed-website',
  templateUrl: './embed-website.component.html',
  styleUrls: ['./embed-website.component.css']
})
export class EmbedWebsiteComponent implements OnInit {

  urlToEmbed: string;
  embeddedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }


  embedWebsite() {

    this.embeddedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlToEmbed);
    this.urlToEmbed = '';

  }
}
