import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // constructor() { }

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);



      /*=============================================
      CARRUSEL
      =============================================*/

        /* $('.flexslider').flexslider({
          animation: "slide",
          rtl: true
        }); */

        $(".flexslider").flexslider({
          animation: "slide",
          controlNav: true,
          animationLoop: false,
          slideshow: false,
          itemWidth: 100,
          itemMargin: 5
        });


      

      /*=============================================
      EFECTO LUPA
      =============================================*/
      /* $(".infoproducto figure.visor img").mouseover((event: any) =>{

        var capturaImg = $(this).attr("src");

        $(".lupa img").attr("src", capturaImg);

        $(".lupa").fadeIn("fast");

        $(".lupa").css({

          "height":$(".visorImg").height()+"px",
          "background":"#eee",
          "width":"100%"

        })

      })

      $(".infoproducto figure.visor img").mouseout((event: any) =>{

        $(".lupa").fadeOut("fast");

      })

      $(".infoproducto figure.visor img").mousemove((event: { offsetX: any; offsetY: any; }) =>{

        var posX = event.offsetX;
        var posY = event.offsetY;

        $(".lupa img").css({

          "margin-left":-posX+"px",
          "margin-top":-posY+"px"

        })

      }) */
    
  }


  imgClick(test:any){
    console.log(test);
    console.log('asd');

    $(".infoproducto figure.visor img").hide();
    $("#lupa"+test).show();

  }

  over(test:any){
    console.log(test);

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
    // $(".lupa").fadeOut("fast");

    var posX = event.offsetX;
    var posY = event.offsetY;

    $(".lupa img").css({

      "margin-left":-posX+"px",
      "margin-top":-posY+"px"

    })
  }

}
