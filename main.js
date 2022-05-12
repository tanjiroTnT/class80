nombre_invitado_array=[]
function submit()
{
    var nombre_invitado_array=[];
    for (var j=1; j<=4; j++)
    {
        var nombre_invitado= document.getElementById=("nombre_invitado_"+j).value;
        console.log(nombre_invitado);
        nombre_invitado_array.push(nombre_invitado);
    }
    console.log(nombre_invitado_array);
    var l_n_a_a=nombre_invitado_array.length;
    console.log(l_n_a_a);
    for (var k=0; k<l_n_a_a;k++)
    {
        nombre_invitado_array.push("<h4>NOMBRE - "+nombre_invitado_array[k]+"</h4>");
        console.log(nombre_invitado_array);
    }
}
function sorting()
{
    nombre_invitado_array.sort();
    console.log(nombre_invitado_array);
    var ver_invitado_array_ordenar=[];
    var l_n_a_a=nombre_invitado_array.length;
    console.log(l_n_a_a);
    for (var k=0; k<l_n_a_a;k++)
    {
        ver_invitado_array_ordenar.push("<h4>NOMBRE - " + nombre_invitado_array[k] + "</h4>");
        console.log(ver_invitado_array_ordenar);
    }
}
