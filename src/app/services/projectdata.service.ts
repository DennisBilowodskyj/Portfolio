import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {

  constructor() { }





  projects = [
    {
      
      github: "https://github.com/DennisBilowodskyj/El-Pollo-loco.git",
      link:"https://el-pollo-loco.dennis-bilowodskyj.com/index.html",
      image: "./assets/img/pollo loco.png",
      title: "El Pollo Loco",
      description: "EPL",
      techstack:"JavaScript | HTML | CSS",

    },
    {
       
      github: "https://github.com/DennisBilowodskyj/Join.git",
      link:"http://join.dennis-bilowodskyj.com/html/",
      image: "./assets/img/join.png",
      title: "Join",
      description: "join",
      techstack:"JavaScript | HTML | CSS",

    },
    {
       
      github: "https://github.com/DennisBilowodskyj/DaBubble.git",
      link:"https://dabubble.dennis-bilowodskyj.com/",
      image: "../../assets/img/DABubble.png",
      title: "DABubble",
      description: "DABubble",
      techstack:"Angular | Typescript | Firebase",

    }
    
  ]

}
