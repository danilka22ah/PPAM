class check_input{
    
    constructor(){

    }

    check_input_get(){
        const check_array = new Array()

            if(link_to_add_id.value == ''){
                check_array.push(false)
            }else{
                check_array.push(true)
            }
            
            return check_array
    }

}
const check = new check_input()
export default check