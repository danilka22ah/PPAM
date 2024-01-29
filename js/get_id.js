class id_random{
    
    constructor(){

    }

    create_id_song(){
        const array_id = new Array()

            function get_id_random_f(value_max){
                return Math.floor(Math.random() * value_max)
             }
             
            array_id.push(get_id_random_f(100000))
        return array_id
    }

}
const get_id_random = new id_random()
export default get_id_random