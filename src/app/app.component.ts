import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'royalIntibo';

  // ngOnInit() {
  //   gsap.registerPlugin(ScrollTrigger);

  //   let cards = gsap.utils.toArray(".card");
  //   let stackHeight = window.innerHeight /60;
  //   console.log(gsap.utils.checkPrefix("filter"))
  //   cards.forEach((card: any, i: number) => {
  //     gsap.fromTo(card.querySelector("img"), {
  //       scale: 1,
  //       transformOrigin: "center top",
  //       filter: "blur(0px)",
  //     }, {
  //       y: gsap.utils.mapRange(1, cards.length, -20, -stackHeight + 20, cards.length - i),
  //       scale: gsap.utils.mapRange(1, cards.length, 0.4, 0.9, i),
  //       filter: "blur(" + gsap.utils.mapRange(1, cards.length, 4, 25, cards.length - i) + "px)",
  //       scrollTrigger: {
  //         trigger: card,
  //         markers: false,
  //         scrub: true,
  //         start: "top " + stackHeight,
  //         end: "+=" + window.innerHeight * 2,
  //         invalidateOnRefresh: true
  //       }
  //     });
  //     // pin separately because we want the pinning to last the whole length of the page, but the animation should only be part of it. 
  //     ScrollTrigger.create({
  //       trigger: card,
  //       pin: true,
  //       start: "top " + stackHeight,
  //       endTrigger: ".following-content", // when the last card finishes its animation, unpin everything
  //       end: "top " + (stackHeight + 100),
  //       pinSpacing: false
  //     });
  //   });
  // }

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
  
    let cards = gsap.utils.toArray(".card");
    let stackHeight = window.innerHeight / 60;
  
    cards.forEach((card: any, i: number) => {
      gsap.fromTo(card.querySelector("img"), {
        scale: 1,
        transformOrigin: "center top",
        opacity: 1,
      }, {
        y: gsap.utils.mapRange(1, cards.length, -20, -stackHeight + 20, cards.length - i),
        scale: gsap.utils.mapRange(1, cards.length, 0.4, 0.9, i),
        opacity: gsap.utils.mapRange(1, cards.length, 0.4, 0.9, i),
        scrollTrigger: {
          trigger: card,
          markers: false,
          scrub: true,
          start: "top " + stackHeight,
          end: "+=" + window.innerHeight * 2,
          invalidateOnRefresh: true
        }
      });
  
      // pin separately because we want the pinning to last the whole length of the page, but the animation should only be part of it. 
      ScrollTrigger.create({
        trigger: card,
        pin: true,
        start: "top " + stackHeight,
        endTrigger: ".following-content",
        end: "top " + (stackHeight + 100),
        pinSpacing: false
      });
    });
  }
  
}
