import data_get from './get_data.js';
import elements_id from '../js/get_element_id.js';

class show_data{
    
  constructor(){

  }

    show_data_auto(){
        const array_get_data = new Array()
        array_get_data.push(data_get.get_data_save()[0])
        let get_data_save_parse = JSON.parse('[' + array_get_data + ']')
        
        let display = ''
        for (let i = 0; i < get_data_save_parse.length; i++) {
    
              if(get_data_save_parse[i].get_dataDay_check == true){
                display += '<div class="notifications_box_message_response_block" id="notifications_box_message_response_block_id"><div class="notifications_box_message_response_detal_data_block" id="notifications_box_message_response_detal_data_block_id"></div><div class="notifications_box_message_response_add_music" id="notifications_box_message_response_add_music_id"><p class="message_add_name_music_2" id="message_add_name_music_2_id">' + get_data_save_parse[i].link_to_add_id + '</p><div class="id_song_block_2"><p class="id_song" id="id_song_id">Id:</p><p class="id_song_copy" id="' + get_data_save_parse[i].get_id + '" style="cursor: pointer">' + get_data_save_parse[i].get_id + '</p></div> <div class="d"> <p class="time_p" id="time_p_id">' + get_data_save_parse[i].get_time + '</p> </div> </div></div>'
              }else{
                display += '<div class="notifications_box_message_response_block" id="notifications_box_message_response_block_id"><div class="notifications_box_message_response_detal_data_block" id="notifications_box_message_response_detal_data_block_id"><div class="notifications_box_message_response_detal_data" id="notifications_box_message_response_detal_data_id"></div><p class="notifications_box_message_response_data" id="notifications_box_message_response_data_id">' + get_data_save_parse[i].get_dataDay + '</p><div class="notifications_box_message_response_detal_2_data" id="notifications_box_message_response_detal_2_data_id"></div></div><div class="notifications_box_message_response_add_music" id="notifications_box_message_response_add_music_id"><p class="message_add_name_music_2" id="message_add_name_music_2_id">' + get_data_save_parse[i].link_to_add_id + '</p><div class="id_song_block_2"><p class="id_song" id="id_song_id">Id:</p><p class="id_song_copy" id="' + get_data_save_parse[i].get_id + '" style="cursor: pointer">' + get_data_save_parse[i].get_id + '</p></div> <div class="d"> <p class="time_p" id="time_p_id">' + get_data_save_parse[i].get_time + '</p></div></div></div>'
              }
        }
        
        document.getElementById('notifications_box_message_block_id').innerHTML = display
    }

    show_data_click(){
        const array_get_data = new Array()
        array_get_data.push(data_get.get_data_save()[0])
        let get_data_save_parse = JSON.parse('[' + array_get_data + ']')

        let display = ''
        for (let i = 0; i < get_data_save_parse.length; i++) {
          if(get_data_save_parse[i].get_dataDay_check == true){
            display += '<div class="notifications_box_message_response_block" id="notifications_box_message_response_block_id"><div class="notifications_box_message_response_detal_data_block" id="notifications_box_message_response_detal_data_block_id"></div><div class="notifications_box_message_response_add_music" id="notifications_box_message_response_add_music_id"><p class="message_add_name_music_2" id="message_add_name_music_2_id">' + get_data_save_parse[i].link_to_add_id + '</p><div class="id_song_block_2"><p class="id_song" id="id_song_id">Id:</p><p class="id_song_copy" id="' + get_data_save_parse[i].get_id + '" style="cursor: pointer">' + get_data_save_parse[i].get_id + '</p></div> <div class="d"> <p class="time_p" id="time_p_id">' + get_data_save_parse[i].get_time + '</p></div></div></div>'
          }else{
            display += '<div class="notifications_box_message_response_block" id="notifications_box_message_response_block_id"><div class="notifications_box_message_response_detal_data_block" id="notifications_box_message_response_detal_data_block_id"><div class="notifications_box_message_response_detal_data" id="notifications_box_message_response_detal_data_id"></div><p class="notifications_box_message_response_data" id="notifications_box_message_response_data_id">' + get_data_save_parse[i].get_dataDay + '</p><div class="notifications_box_message_response_detal_2_data" id="notifications_box_message_response_detal_2_data_id"></div></div><div class="notifications_box_message_response_add_music" id="notifications_box_message_response_add_music_id"><p class="message_add_name_music_2" id="message_add_name_music_2_id">' + get_data_save_parse[i].link_to_add_id + '</p><div class="id_song_block_2"><p class="id_song" id="id_song_id">Id:</p><p class="id_song_copy" id="' + get_data_save_parse[i].get_id + '" style="cursor: pointer">' + get_data_save_parse[i].get_id + '</p></div> <div class="d"> <p class="time_p" id="time_p_id">' + get_data_save_parse[i].get_time + '</p></div></div></div>'
        }

        document.getElementById('notifications_box_message_block_id').innerHTML = display
        
        const elements_function = elements_id.Get_elements_id()[i]
        console.log(elements_function)
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
        //const json = data_get.get_data_save()[0]
        //console.log(json)
    }

    

}
const get_show_data = new show_data()
export default get_show_data
