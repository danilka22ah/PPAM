class get_id_content{
    constructor(p_x, p_y){
        this.p_x = p_x
        this.p_y = p_y
    }
    
    call_coordinates(){
        const element_position = new Array()
        coordinates.p_x = event.clientX - 25
        coordinates.p_y = event.clientY - 25
        element_position.push(coordinates.p_x, coordinates.p_y)
        return element_position

}
}

const coordinates = new get_id_content(0, 0)
export default coordinates