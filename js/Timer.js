class timer{
    constructor(count, progressbar_to_close_id, x){
        this.count = count
        this.x = x
        this.progressbar_to_close_id = progressbar_to_close_id
    }
    
    set_time_out(){
            const time = setInterval(() => {
                time_out.count--
                this.progressbar_to_close_id.value = this.count
                if(time_out.count == 0){
                    clearInterval(time)
                }
            }, 1);       
    }

}
const time_out = new timer(500, progressbar_to_close_id, 1121)
export default time_out