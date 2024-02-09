import data_get from './get_data.js';

class Get_elements_id{
    
    constructor(){

    }

    Get_elements_id(){
        const array_elements = new Array()

        const buttons = document.querySelector('.notifications_box_message_response_block')
        let div_parent = buttons.parentElement.childNodes

        for (let elem of div_parent) {
            const element = elem.lastChild.children[1].children[1]
            array_elements.push(element)
        }
            return array_elements
    }

}
const elements_id = new Get_elements_id()
export default elements_id
