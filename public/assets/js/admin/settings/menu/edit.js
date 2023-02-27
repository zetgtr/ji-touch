$(document).ready(()=>{
    let menuDanger = $('.menu_danger');
    let menuSuccess = $('.menu_success');
    let menuTitle = $('.menu_title');
    let menuLogo = $('#menu_logo');
    let menuName = $('#menu_name');
    let menuUrl = $('#menu_url');
    $('.button-edit').on('click',(e)=>{
        e.preventDefault()
        let url = $(e.target).attr('href')
        if(!url)
        {
            url = $(e.target).parent('a').attr('href')
        }
        $.ajax({
            type: 'GET',
            url,
            success(data)
            {
                if(data.status)
                {
                    let menu = data.menu;
                    menuDanger.removeClass('d-none');
                    menuDanger.on('click',(e)=>exitEdit(e));
                    menuSuccess.text('Сохранить');
                    menuTitle.text('Редактировать позицию: '+menu.name);
                    menuLogo.val(menu.logo)
                    menuName.val(menu.name)
                    menuUrl.val(menu.url)
                }
            }
        })
    })

    function exitEdit(e)
    {
        e.preventDefault()
        menuDanger.addClass('d-none');
        menuDanger.off('click',(e)=>exitEdit(e));
        menuSuccess.text('Добавить');
        menuTitle.text('Добавить меню');
        menuLogo.val('')
        menuName.val('')
        menuUrl.val('')
    }
})
