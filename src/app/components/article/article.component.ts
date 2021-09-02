import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/Article';
import { ArticlesService } from '../../services/articles/articles.service';
import Swal from 'sweetalert2'

declare var $:any;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  item!: any;
  items!: Array<any>;

  constructor(
    private route: ActivatedRoute,
    public itemService: ArticlesService,
  ) {

  }


  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    const id = this.route.snapshot.paramMap.get('id');

    // TODOS LOS PRODUCTOS
    this.items = this.itemService.serviceGetItems();

    for (let i = 0; i < this.items.length; i++) {

      if (id == this.items[i].id) {
        this.item = this.items[i];
      }
      
    }
    
    // SLIDER.
    $(".flexslider").flexslider({
      animation: "slide",
      controlNav: true,
      animationLoop: false,
      slideshow: false,
      itemWidth: 100,
      itemMargin: 5
    });

    // SCROLL TOP.
    $("html, body").animate({ scrollTop: "0" });
    
  }
  
  imgClick(test:any){

    $(".infoproducto figure.visor img").hide();
    $("#lupa"+test).show();

  }

  over(test:any){

    $(".lupa img").attr("src", test);

    $(".lupa").fadeIn("fast");

    $(".lupa").css({
      "height":$(".visorImg").height()+"px",
      "background":"#eee",
      "width":"100%"
    })

  }

  out(){
    $(".lupa").fadeOut("fast");
  }

  move(event:any){

    var posX = event.offsetX;
    var posY = event.offsetY;

    $(".lupa img").css({

      "margin-left":-posX+"px",
      "margin-top":-posY+"px"

    })
  }

  addCar(item :any){
    console.log(item);
    
    this.itemService.ServiceAddCar(item);

    Swal.fire(
      'OK!',
      '¡Se ha agregado un nuevo producto al carrito de compras!',
      'success'
    );

  }
}
