import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/Article';
import { ArticlesService } from '../../services/articles/articles.service';

declare var $:any;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // constructor() { }

  // @Input() items!: Article[];
  // @Input() items!: Article;
  @Input() items!: Array<any>;


  constructor(
    private route: ActivatedRoute,
    public itemService: ArticlesService,
  ) {

    // route.queryParams.subscribe(p => console.log('p.myQueryParam',p));
  }


  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    $(".flexslider").flexslider({
      animation: "slide",
      controlNav: true,
      animationLoop: false,
      slideshow: false,
      itemWidth: 100,
      itemMargin: 5
    });


    $("html, body").animate({ scrollTop: "0" });

    // MÁS PRODUCTOS.
    this.items = this.itemService.serviceGetItems();
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

  /* ngAfterViewInit() 
  {
      // Tu código ...
      console.log('load...');
  } */

  

}
