
function conversion()
{
    let enteredin=document.getElementById("input");
    let identified=document.querySelector("input[name='select']:checked");
    
    if(identified==null)
    {
        alert("Choose your conversion");
    }
    else if(enteredin.value==="")
    {
        alert("Enter value");
    }
    else
    {
        if(identified.id==='f')
        {       
            if(enteredin.value>=32 && enteredin.value<=212)
            {
            var ans=(enteredin.value-32)/1.8;
            ans.toFixed(3);
            document.getElementById("output").value=ans.toFixed(3);
            }
            else
            {
                alert("Enter valid temperature(32-212)");
            }
        }
        else
        {
            if(enteredin.value>=0 && enteredin.value<=100)
            {
                var ans=(enteredin.value*1.8)+32;
                document.getElementById("output").value=ans.toFixed(3);
            }
            else
            {
                alert("Enter valid temperature(0-100)");
            }
        }
    }
}