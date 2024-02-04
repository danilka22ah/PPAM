import check from '../js/Check_input.js';
import time_out_element from './Timer.js';
import get_position_element from './Get_position_element.js';
//auto_function

let drag_check = false

function auto_function(){    
input_empty_id.classList.remove('input_empty')
input_empty_id.style.opacity = '0'
particles_js.style.animation = 'particles_animation 5s infinite'
box_settings_id.style.left = '3%'
box_settings_id.style.top = '7%'
}


//click_functions
function click_functions(){

let hummer_drag_element = new Hammer(box_settings_id);
hummer_drag_element.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );
hummer_drag_element.on("pan", drag_element);

let dragging = false;

function drag_element(event){
    const x = get_position_element.call_coordinates()[0]
    const y = get_position_element.call_coordinates()[1]

    if (!dragging){
        dragging = true;
      }
      
      box_settings_id.style.left = x + "px"
      box_settings_id.style.top = y + "px"
      
      if (event.isFinal){
        dragging = false;
        box_settings_id.style.left = (x * 100) / window.innerWidth + '%'
        box_settings_id.style.top = (y * 100) / window.innerHeight + '%'
        
      }
      
}

let f = false
box_settings_id.addEventListener("mousedown", function(){
    f = false
    box_settings_id.addEventListener("mousemove", function(){
        f = true
    })
    box_settings_id.addEventListener("mouseup", function(){
        if(f == true){
            settings_main_block_id.style.display = 'none'
        }else{
            settings_main_block_id.style.display = 'block'
        }
    })
})

close_settings_id.addEventListener("mousedown", function(){
    settings_main_block_id.style.display = 'none'
})

link_to_add_id.addEventListener('click', function (e) {
    input_empty_id.classList.remove('input_empty')
    input_empty_id.style.opacity = '0'
});


btn_public_link_id.addEventListener('click', function (event) {
    if(time_out_element.count <= 500){
        btn_public_link_id.setAttribute('disabled', true)
    }

    if(!!check.check_input_get()[0]){

        const time = setInterval(() => {
            if(time_out_element.count == 0){
            drag_check = false
            clearInterval(time)
            btn_public_link_id.removeAttribute('disabled', false)
            box_message_id.style.animation = 'box_message_animation_right 0.5s'
            setTimeout(() => {
                box_message_id.style.display = 'none'
            }, 400);


            if(window.innerWidth < time_out_element.x){
                box_message_id.style.animation = 'box_message_animation_top 0.5s'
                //box_message_id.classList.toggle('box_message_animation_top')
                console.log('box_message_animation_top')
                btn_public_link_id.setAttribute('disabled', true)
                setTimeout(() => {
                    btn_public_link_id.removeAttribute('disabled', false)
                }, 350);
            }
            time_out_element.count = 500
            btn_public_link_id.setAttribute('disabled', true)
            setTimeout(() => {
                btn_public_link_id.removeAttribute('disabled', false)
            }, 350);
            }
        }, 1);

        box_message_id.style.display = 'block'
        time_out_element.set_time_out()
        drag_check = true
        box_message_id.style.animationPlayState = 'running'
        box_message_id.style.animation = 'box_message_animation_left 0.5s'
        box_message_id.classList.toggle('box_message_animation_left')
        box_message_id.classList.add('box_message_left')
    }else{
        btn_public_link_id.removeAttribute('disabled', false)
        input_empty_id.classList.add('input_empty')
        input_empty_id.style.opacity = '1'
    }


    if(window.innerWidth < 1121){

        let Hammer_swipe_up = new Hammer(box_message_id);
        Hammer_swipe_up.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

        Hammer_swipe_up.on("swipeup", function(event) {
            if(event.type == 'swipeup'){
                if(drag_check == true){
                time_out_element.count = 1
                box_message_id.style.animation = 'box_message_animation_top 0.5s'
                }
            }
        })

        box_message_id.style.animationPlayState = 'running'
        box_message_id.style.animation = 'box_message_animation_bottom 0.5s'
    }
});


box_message_close_id.addEventListener('click', function (e) {
    time_out_element.count = 1
});


id_song_copy_id_2.addEventListener('click', e => {
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
});


notifications_block_id.addEventListener('click', e => {
    if((symbol_notifications_id.style.transform == "rotate(90deg)")){
        symbol_notifications_id.style.transform = "rotate(-90deg)"
        notifications_box_block_id.classList.add('notifications_box_block_right')
        notifications_box_block_id.classList.remove('notifications_box_block_left')

        notifications_box_block_id.classList.add('transition')
        setTimeout(() => {
            notifications_box_block_id.classList.remove('transition')
        }, 500);

        setTimeout(() => {
            notifications_box_block_id.classList.remove('notifications_box_block_right')
        }, 500);
    }else{

        notifications_box_block_id.classList.add('transition')
        setTimeout(() => {
            notifications_box_block_id.classList.remove('transition')
        }, 500);

        symbol_notifications_id.style.transform = "rotate(90deg)"
        notifications_box_block_id.classList.add('notifications_box_block_left')
        notifications_box_block_id.classList.remove('notifications_box_block_right')
}
});

let Hammer_swipe_left = new Hammer(brightness_id);
let Hammer_onclik_left_2 = new Hammer(link_to_add_block_id);

Hammer_swipe_left.on("swipeleft swiperight", function(event) {
    if(event.type == 'swipeleft'){
        notifications_box_block_id.classList.add('transition')
        setTimeout(() => {
            notifications_box_block_id.classList.remove('transition')
        }, 500);

        symbol_notifications_id.style.transform = "rotate(90deg)"
        notifications_box_block_id.classList.add('notifications_box_block_left')
        notifications_box_block_id.classList.remove('notifications_box_block_right')
    }else{
        symbol_notifications_id.style.transform = "rotate(-90deg)"
        notifications_box_block_id.classList.add('notifications_box_block_right')
        notifications_box_block_id.classList.remove('notifications_box_block_left')

        notifications_box_block_id.classList.add('transition')
        setTimeout(() => {
            notifications_box_block_id.classList.remove('transition')
        }, 500);

        setTimeout(() => {
            notifications_box_block_id.classList.remove('notifications_box_block_right')
        }, 500);
    }
});

Hammer_onclik_left_2.on("swipeleft swiperight", function(event) {
    if(event.type == 'swipeleft'){
        notifications_box_block_id.classList.add('transition')
        setTimeout(() => {
            notifications_box_block_id.classList.remove('transition')
        }, 500);

        symbol_notifications_id.style.transform = "rotate(90deg)"
        notifications_box_block_id.classList.add('notifications_box_block_left')
        notifications_box_block_id.classList.remove('notifications_box_block_right')
    }else{
        symbol_notifications_id.style.transform = "rotate(-90deg)"
        notifications_box_block_id.classList.add('notifications_box_block_right')
        notifications_box_block_id.classList.remove('notifications_box_block_left')

        notifications_box_block_id.classList.add('transition')
        setTimeout(() => {
            notifications_box_block_id.classList.remove('transition')
        }, 500);

        setTimeout(() => {
            notifications_box_block_id.classList.remove('notifications_box_block_right')
        }, 500);
    }
});


let Hammer_onclik_right = new Hammer(box_message_id);

Hammer_onclik_right.on("swipeleft swiperight", function(event) {
  if(event.type == 'swiperight'){
    if(drag_check == true){
    box_message_id.classList.toggle('box_message_animation_right_2')
    box_message_id.style.animation = 'box_message_animation_right 0.5s'
    time_out_element.count = 500
    drag_check = false
    setTimeout(() => {
        time_out_element.count = 1
        box_message_id.style.display = 'none'
        box_message_id.classList.remove('box_message_animation_right_2')
    }, 380);
}
  }
})

let Hammer_onclik_right_2 = new Hammer(notifications_box_message_block_id);

Hammer_onclik_right_2.on("swipeleft swiperight", function(event) {
  if(event.type == 'swiperight'){
    symbol_notifications_id.style.transform = "rotate(-90deg)"
    notifications_box_block_id.classList.add('notifications_box_block_right')
    notifications_box_block_id.classList.remove('notifications_box_block_left')
    notifications_box_block_id.classList.add('transition')
    setTimeout(() => {
        notifications_box_block_id.classList.remove('transition')
    }, 500);

    setTimeout(() => {
        notifications_box_block_id.classList.remove('notifications_box_block_right')
    }, 500);
  }
})

document.onkeydown = function(event){
    if(event.keyCode == 27){
        settings_main_block_id.style.display = 'none'
    }
}
btn_close_notofications_block_id.addEventListener('click', e => {
    symbol_notifications_id.style.transform = "rotate(-90deg)"
    notifications_box_block_id.classList.add('notifications_box_block_right')
    notifications_box_block_id.classList.remove('notifications_box_block_left')
    notifications_box_block_id.classList.add('transition')
    setTimeout(() => {
        notifications_box_block_id.classList.remove('transition')
    }, 500);

    setTimeout(() => {
        notifications_box_block_id.classList.remove('notifications_box_block_right')
    }, 500);
    
})
}
auto_function()
click_functions()
