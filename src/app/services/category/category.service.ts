import { Injectable } from '@angular/core';
import { Category } from '../../models/Category';
import { Subcategory } from '../../models/Subcategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  items : Category[];
  // items2!: Subcategory[];
  
  constructor() {
    
    this.items = [
      {id: "1", slug: "ropa", name: "ROPA",
        subcategory : [
          {slug: "ropa-para-dama",   name : "Ropa para dama"},
          {slug: "ropa-para-hombre", name : "Ropa para hombre"},
          {slug: "ropa-deportiva",   name : "Ropa deportiva"},
          {slug: "ropa-infantil",    name : "Ropa infantil"},
        ]
      },
      {id: "2", slug: "calzado", name: "CALZADO",
        subcategory : [
          {slug: "calzado-para-dama",   name : "Calzado para dama"},
          {slug: "calzado-para-hombre", name : "Calzado para hombre"},
          {slug: "calzado-deportivo",   name : "Calzado deportivo"},
          {slug: "calzado-infantil",    name : "Calzado infantil"},
        ]
      },
      {id: "3", slug: "tecnologia", name: "TECNOLOGÍA",
        subcategory : [
          {slug: "teléfonos-movil",       name : "Teléfonos Móvil"},
          {slug: "tabletas-electronicas", name : "Tabletas Electrónicas"},
          {slug: "computadoras",          name : "Computadoras"},
          {slug: "auriculares",           name : "Auriculares"},
        ]
      },
      {id: "4", slug: "cursos", name: "CURSOS",
        subcategory : [
          {slug: "desarrollo-web",       name : "Desarrollo Web"},
          {slug: "aplicaciones-moviles", name : "Aplicaciones Móviles"},
          {slug: "diseno-grafico",       name : "Diseño Gráfico"},
          {slug: "marketing-digital",    name : "Marketing Digital"},
        ]
      },
      {id: "5", slug: "accesorios", name: "ACCESORIOS",
        subcategory : [
          {slug: "bolsos",       name : "Bolsos"},
          {slug: "relojes",      name : "Relojes"},
          {slug: "pulseras",     name : "Pulseras"},
          {slug: "collares",     name : "Collares"},
          {slug: "gafas-de-sol", name : "Gafas de sol"},
        ]
      },
    ];

  }

  serviceGetItems(){
    if(localStorage.getItem('categories') === null){
      return this.items;
    }else{

      this.items = JSON.parse(localStorage.getItem('categories')!);
      return this.items;
    }
  }
}
