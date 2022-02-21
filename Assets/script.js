function calcular(){
    var num = document.getElementById('fnum')
    var list = document.getElementById('flist')
    if(num.value.length == 0 || Number(num.value) <= 0){
        alert('[Erro] Digite corretante um valor para calcular a tabuada.')
    }else{
        var n = Number(num.value)
        list.innerHTML=''
        for(let valor = 0; valor <= 100; valor++){
            var item = document.createElement('option')
            item.text=`${n} x ${valor} = ${n * valor}`
            list.appendChild(item)
            
        }

        
    }

}