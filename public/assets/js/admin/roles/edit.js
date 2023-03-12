$(document).ready(()=>{
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $('.edit-role').on('click',(e)=>{
        let url = $(e.target).attr('href')
        if(!url){
            url = $(e.target).closest('.edit-role').attr('href')
        }
        $.ajax({
            type: 'GET',
            url,
            success(data){
                let container = $('.modal-body');
                let editTemplate = $($('#edit-role')[0].content.children[0]).clone()
                let content = $(editTemplate).find('.table-edit-role-tr').first()[0].cloneNode(true);
                editTemplate.find('tbody').html('');
                container.html("")
                data.forEach(el=>{
                    content = content.cloneNode(true)
                    $(content).find('.text-menu').text(el.name);
                    if(data.show){
                        $(content).find('.show-publish').attr('class','btn btn-success show-publish')
                        $(content).find('.show-publish').find('i').attr('class','far fa-eye')
                    }else {
                        $(content).find('.show-publish').attr('class','btn btn-default show-publish')
                        $(content).find('.show-publish').find('i').attr('class','far fa-eye-slash')
                    }
                    $(editTemplate).find('table').append(content);
                })
                container.append(editTemplate)
            }
        })
    })
})
