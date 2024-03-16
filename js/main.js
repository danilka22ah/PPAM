import data_save from './save_data.js';
import data_get from './get_data.js';
import get_show_data from './show_messages.js';
import List_of_elements from './List_of_elements.js';
import English_language from '../JSON/English_language.js';
import Russian_language from '../JSON/Russian_language.js';
import elements_id from '../js/get_element_id.js';
import check from '../js/Check_input.js';

//auto_function

function auto_function(){
  console.log('f')
  if(localStorage.data_save){
    notifications_box_not_message_block_id.style.display = 'none'
    get_show_data.show_data_auto()
}else{
    notifications_box_not_message_block_id.style.display = 'block'
}

if(localStorage.English_mode){
  show_language_English_auto()
}

function show_language_English_auto(){
  const array_elements = new Array()
  const List = List_of_elements.List_of_elements_get()
  for (let i = 0; i < List.length; i++) {
    for (const key in English_language) {
      array_elements.push(English_language[key])
    }
      List_of_elements.List_of_elements_get()[i].innerHTML = array_elements[i]
  }   
  en_language_id.style.opacity = '100%'
  rus_language_id.style.opacity = '60%'

  document.title = English_language.tittle_page;
}

}

//click_functions

function click_functions(){

  btn_public_link_id.addEventListener('click', function (e) {
    if(!!check.check_input_get()[0]){

    if(localStorage.data_check == null){
      localStorage.setItem('data_check', 1)
      data_save.set_data_save_start()
      get_show_data.show_data_click()
    }else{
      data_save.set_data_save()
      get_show_data.show_data_click()
    }
  }else{
    
  }


    const array_get_data = new Array()
    array_get_data.push(data_get.get_data_save()[0])
    let get_data_save_parse = JSON.parse('[' + array_get_data + ']')
    
    for (let i = 0; i < get_data_save_parse.length; i++) {


      const link_to_add = document.getElementById('link_to_add_id').value
      if(localStorage.English_mode){
        message_add_name_music_id.innerHTML = link_to_add + " Added!"
      }else{
        message_add_name_music_id.innerHTML = link_to_add + " добавлено!"
      }
      id_song_copy_id_2.innerHTML = get_data_save_parse[i].get_id
      }
});





id_song_copy_id_2.addEventListener('click', e => {
  copy_complete_id.style.display = 'block'
  navigator.clipboard.writeText(id_song_copy_id_2.textContent)
})

const array_get_data = new Array()
array_get_data.push(data_get.get_data_save()[0])
let get_data_save_parse = JSON.parse('[' + array_get_data + ']')

for (let i = 0; i < get_data_save_parse.length; i++) {
  const elements_function = elements_id.Get_elements_id()[i]
  elements_function.addEventListener('click', e => {
  navigator.clipboard.writeText(elements_function.textContent)
  })

  elements_function.addEventListener('click', e => {
    if(copy_complete_id.style.display == 'block'){

    }else{
      setTimeout(() => {
        copy_complete_id.style.animation = 'copy_complete_fade 3s'
      }, 1000)
      setTimeout(() => {
        copy_complete_id.style.animationPlayState = 'paused'
        copy_complete_id.style.display = 'none'
      }, 3700);
    }
    copy_complete_id.style.display = 'block'

  });
}
  

en_language_id.addEventListener('click', e => {
  en_language_id.style.opacity = '100%'
  rus_language_id.style.opacity = '60%'
  localStorage.setItem('English_mode', true)
  show_language_English()

})
rus_language_id.addEventListener('click', e => {
  en_language_id.style.opacity = '60%'
  rus_language_id.style.opacity = '100%'
  localStorage.removeItem('English_mode')
  show_language_Russian()
})

function show_language_English(){
  const array_elements = new Array()
  const List = List_of_elements.List_of_elements_get()
  for (let i = 0; i < List.length; i++) {
    for (const key in English_language) {
      array_elements.push(English_language[key])
    }
      List_of_elements.List_of_elements_get()[i].innerHTML = array_elements[i]
  }
  const link_to_add = document.getElementById('link_to_add_id').value
  message_add_name_music_id.innerHTML = link_to_add + " Added!"
  document.title = English_language.tittle_page;

}

function show_language_Russian(){
  const array_elements = new Array()
  const List = List_of_elements.List_of_elements_get()
  for (let i = 0; i < List.length; i++) {
    for (const key in Russian_language) {
      array_elements.push(Russian_language[key])
    }
      List_of_elements.List_of_elements_get()[i].innerHTML = array_elements[i]
  }
  const link_to_add = document.getElementById('link_to_add_id').value
  message_add_name_music_id.innerHTML = link_to_add + " добавлено!"
  document.title = Russian_language.tittle_page;
}
}

auto_function()
click_functions()
console.log('f')
