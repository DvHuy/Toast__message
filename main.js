function toast(
    {title = "", 
    message= "",
    type= "info", 
    duration= 3000
}){
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div');       
        toast.classList.add('toast', `toast--${type}`);
        
        const icons = {
            success: "fa-solid fa-circle-check",
            error: "fa-solid fa-circle-xmark",
        }
        
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML =  
        `
        <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">
                ${message}
                </p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `
        main.appendChild(toast);

        //Auto remove the toast
        const autoRemoveId = setTimeout(function(){
            main.removeChild(toast);
        }, duration + 1000);

        //Remove the toast when clicked
        toast.onclick = function(e){
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }
    }
}

function showSuccessToast(){
    toast({
        title: "Thành công!",
        message: "Bạn đã đăng ký tài khoản thành công",
        type: "success",
        duration: 1800
    })
}

function showErrorToast(){
    toast({
        title: "Thất bại!",
        message: "Đã xảy ra lỗi, vui lòng liên hệ quản trị viên.",
        type: "error",
        duration: 1800
    })
}