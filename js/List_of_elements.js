class List_of_elements{
    
    constructor(){

    }

    List_of_elements_get(){
        const array_elements = new Array()
            array_elements.push(
                sign_in_p_id,
                copy_complete_p_id,
                link_text_id,
                not_youtube_links_id,
                input_empty_id,
                btn_public_link_id,
                notofications_p_id,
                notifications_box_not_message_p_id,
                settings_menu_up_p_id,
                button_language_id,
                rus_language_id,
                en_language_id
            )
            
            return array_elements
    }

}
const List = new List_of_elements()
export default List