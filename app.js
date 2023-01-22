document.getElementById("mainbutton").addEventListener('click', change)


function change(){
    for (let i = 1; i <= 9; i++)
    {
        if (i == 5)
            continue;
       
        let text = document.getElementById("button" + String(i)).innerHTML
        //console.log(text);
        
        let num=Number(text.slice(7, 8));

        if (num === 1)
            num = 4;
        if (num === 2)
            num = 1;
        if (num === 3)
            num = 2;
        if (num === 6)
            num = 3;
        if (num === 9)
            num = 6;
        if (num === 8)
            num = 9;
        if (num === 7)
            num = 8;
        if (num === 4)
            num = 7;
        
        num = String(num);
        document.getElementById("button" + String(i)).innerHTML= "button " + num;
        // console.log(text);
        // console.log('\n');
    }
}