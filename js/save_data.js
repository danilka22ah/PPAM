import elements from './get_id.js';
import data_get from './get_data.js';

const array_local_storage = new Array()
class data{
    constructor(link_to_add_id){
        this.link_to_add_id = link_to_add_id
    }

    set_data_save_start(){
        const array_save = new Array()
        const json_save = {
            link_to_add_id : '',
            get_id : '',
            get_dataDay : '',
            get_time : '',
            get_dataDay_check : '',
            get_dataDay_check_day : ''
        }
        let currentDate = new Date()
        let currentDate_save = currentDate.getDate()
        let currentDate_save_parse = currentDate_save.toString()
        json_save.link_to_add_id = data_save.link_to_add_id.value
        json_save.get_id = elements.create_id_song()[0]
        json_save.get_dataDay = ("0" + currentDate_save).slice(-2) + '.' + ("0" + (currentDate.getMonth() + 1)).slice(-2) + '.' + currentDate.getFullYear()
        json_save.get_time = (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours() + ':' + (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes()
        json_save.get_dataDay_check = false
        json_save.get_dataDay_check_day = (currentDate_save_parse).slice(-2)
        let save_json = JSON.stringify(json_save)
        array_save.push(save_json)
        array_local_storage.push(array_save)
        localStorage.setItem('data_save', array_local_storage)
        return array_save
    }

    set_data_save(){
        const array_get_data = new Array()
        array_get_data.push(data_get.get_data_save()[0])
        const array_save = new Array()
        const json_save = {
            link_to_add_id : '',
            get_id : '',
            get_dataDay : '',
            get_time : '',
            get_dataDay_check : '',
            get_dataDay_check_day : ''
        }
        let currentDate = new Date()
        json_save.link_to_add_id = data_save.link_to_add_id.value
        json_save.get_id = elements.create_id_song()[0]
        json_save.get_dataDay = ("0" + data_save.set_data_save_2()[0]).slice(-2) + '.' + ("0" + (currentDate.getMonth() + 1)).slice(-2) + '.' + currentDate.getFullYear()
        json_save.get_time = (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours() + ':' + (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes()
        json_save.get_dataDay_check = data_save.set_data_save_get_dataDay_check_day()[data_save.set_data_save_get_dataDay_check_day().length - 1]
        json_save.get_dataDay_check_day = (data_save.set_data_save_2()[0])
        let save_json = JSON.stringify(json_save)
        array_save.push(save_json)
        array_get_data.push(array_save)
        localStorage.setItem('data_save', array_get_data)
        return array_save
    }

    set_data_save_2(){
        let currentDate = new Date()
          let currentDate_save = currentDate.getDate()
          const array_get_data = new Array()
          const array_get_data_2 = new Array()
          array_get_data.push(data_get.get_data_save()[0])
          let get_data_save_parse = JSON.parse('[' + array_get_data + ']')
        for (let i = 0; i < get_data_save_parse.length; i++) {
            array_get_data_2.push(currentDate_save)
          return array_get_data_2
    }
      }

    set_data_save_get_dataDay_check_day(){
        let currentDate = new Date()
        let currentDate_save = currentDate.getDate()
        const array_get_data = new Array()
        array_get_data.push(data_get.get_data_save()[0])
        let get_data_save_parse = JSON.parse('[' + array_get_data + ']')
        const dataDay_check = new Array()
        for (let i = 0; i < get_data_save_parse.length; i++) {
          if(currentDate_save > get_data_save_parse[get_data_save_parse.length - 1].get_dataDay_check_day){
            dataDay_check.push(false)
            data_save.set_data_save_2()
          }else{
            dataDay_check.push(true)
          }
          return dataDay_check
        }
    }

}
const data_save = new data(link_to_add_id)
export default data_save