class data{
    
  constructor(){

  }

    get_data_save(){
      const get_data_save = localStorage.getItem('data_save')
      const array_get_data = new Array()
      array_get_data.push(get_data_save)
      return array_get_data
    }

}
const data_get = new data()
export default data_get