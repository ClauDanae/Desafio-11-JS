function Calculator() {
    const Cantidad = document.querySelector("#Cantidad").value;
    const Color = document.querySelector("#Color").value;
    const Precio = document.querySelector("#Precio").innerHTML;
    console.log("Cantidad" + Cantidad)
    console.log("Color" + Color)
    console.log("Precio" + Precio)

    document.querySelector("#Resultado_Total").innerHTML = Cantidad * Precio;
    document.querySelector("#Resultado_Cantidad").innerHTML = Cantidad;
    document.querySelector("#Resultado_Color").style.backgroundColor = Color;
}