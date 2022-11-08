

const ProductItem = ({ data, addToCart}) => {

    let {id, nombre, precio, src} = data;

    console.log("a",data);
    

    return (
        <div className="cardProduct">
            
            <img className="imgProduct" src={src}></img>
            <h4 className="titleProduct">{nombre}</h4>
            <h5 className="priceProduct">${new Intl.NumberFormat('es-CL').format(precio)}</h5>

            <button className="btnAddCart btn btn-primary" onClick={() => addToCart(id)}>Agregar al carro</button>
        </div>
    )
}

export default ProductItem;
