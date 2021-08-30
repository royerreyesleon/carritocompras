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
      {id: "1", name: "ROPA",
        subcategory : [
          {name : "Ropa para dama"},
          {name : "Ropa para hombre"},
          {name : "Ropa deportiva"},
          {name : "Ropa infantil"},
        ]
      },
      {id: "2", name: "CALZADO",
        subcategory : [
          {name : "Calzado para dama"},
          {name : "Calzado para hombre"},
          {name : "Calzado deportivo"},
          {name : "Calzado infantil"},
        ]
      },
      {id: "3", name: "TECNOLOGÍA",
        subcategory : [
          {name : "Teléfonos Móvil"},
          {name : "Tabletas Electrónicas"},
          {name : "Computadoras"},
          {name : "Auriculares"},
        ]
      },
      {id: "4", name: "CURSOS",
        subcategory : [
          {name : "Desarrollo Web"},
          {name : "Aplicaciones Móviles"},
          {name : "Diseño Gráfico"},
          {name : "Marketing Digital"},
        ]
      },
      {id: "5", name: "ACCESORIOS",
        subcategory : [
          {name : "Bolsos"},
          {name : "Relojes"},
          {name : "Pulseras"},
          {name : "Collares"},
          {name : "Gafas de sol"},
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
