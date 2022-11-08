import React from 'react'

const SideCarrito = () => {
  return (
    <div class="container-fluid">

    <h1>Carrito de Compras</h1>
    <button id="btnCarrito" class="btn btn-primary">Carrito</button>
    <hr/>

    <div class="row py-3">


      <div class="col-3 order-2" id="sticky-sidebar">
        <div id="sideCarrito" class="sticky-top">

        </div>
      </div>
   

      <div class="col" id="main">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Acción</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody id="items"></tbody>
          <tfoot>
            <tr id="footer">
              <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
            </tr>
          </tfoot>
        </table>

        <div class="row" id="cards"></div>
      </div>
    </div>







  </div>
  )
}

export default SideCarrito