const doc = document
doc.onload = addEventListener('click',(e)=>e.preventDefault())


function dataTest(){
    let info = doc.querySelector('.info')
    let message = 'hello'
    createData(info,message,'h1')
    createData(info,message,'p')
    createData(info,message,'strong')
    createData(info,message,'h3')
    createData(info,message,'ul')
    createData(info,message,'li')
    createData(info,message,'option')
}


function data(){
    let info = doc.querySelector('.info')
    let search = doc.querySelector('#sc')

    search.addEventListener('change',()=>{
        if(search.value){
            const url = `http://localhost:8081/search?name=${search.value}`
            const config = {
                method: 'GET'
            }
        
            fetch(url, config)
                    .then(data => data.json())
                    .then(data => {
                        data.map(e=>{ 
                            
                            let idBk   = e.id
                            let nameBk = e.name

                            createData(info,idBk,'strong')
                            createData(info,nameBk,'strong')
                            console.log(info.childNodes)

                           /*if(info.childNodes){
                                console.log(info.childNodes)
                           }*/

                           //Noah bennet

                           if(info.children){
                            console.log(info.children)
                            }

                            if(info.children == '' || info.children == null){
                                console.log(null)
                            }

                            console.log(info.value)
                           
                        })
                    })
                    .catch(err => console.log(err))
        }
    })
}
data()


function createData(positioned,element,object){
    let ob = document.createElement(`${object}`)
    ob.append(element)
    positioned.append(ob)
}

/**
 * div = info
 * 
 * 
 * a div não possui valores nem preenchidos,
 * mas os dados se torão nós filhos.
 * 
 */