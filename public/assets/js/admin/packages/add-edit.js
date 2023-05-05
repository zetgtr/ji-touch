$(document).ready(()=>{
    let container = $('.modal-body');
    let title = $('.modal-title')
    let addTemplate = $($('#add-packages')[0].content.children[0]).clone()
    let addUrl = addTemplate.find('#form-add-edit').attr('action')
    let seederTemplate = $($('#seeder_template')[0].content.children[0]).clone()
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    function seeder(){
        container.find('#seeder').on('change',()=>{
            if(container.find('#seeder').prop('checked')){
                container.find('.seeder-form').after(seederTemplate)
            }else {
                $('.seeder_box').remove()
            }
        })
    }
    $('.add-packages').on('click',()=>{
        title.text('Добавить пакет')
        container.html("")
        container.append(addTemplate)
        container.find('#form-add-edit').attr('action',addUrl)
        $('#button_success').val('Добавить')
        seeder()
    })
    $('.edit-packages').on('click',(e)=>{
        title.text('Редактировать пакет ...')
        container.html("")
        container.append("Загрузка ...")
        let addTemplateNode = addTemplate.clone()
        let seederTemplateNode = seederTemplate.clone()
        let editUrl = $('#packages_install option:selected').attr('data-edit');
        $.ajax({
            url: $('#packages_install option:selected').attr('data-url'),
            type: "get",
            success(data)
            {
                container.html("")
                if(data.status){
                    title.text('Редактировать пакет '+data.name);
                    container.append(addTemplateNode)
                    container.find('#form-add-edit').attr('action',editUrl)
                    container.find('#name').val(data.name)
                    container.find('#url').val(data.url)
                    container.find('#delete').val(data.delete)
                    container.find('#provider').val(data.provider)
                    if(data.migration)
                    {
                        container.find('#migration').attr('checked',true)
                    }
                    if(data.script)
                    {
                        container.find('#script').attr('checked',true)
                    }
                    if(data.view)
                    {
                        container.find('#view').attr('checked',true)
                    }
                    if(data.vue)
                    {
                        container.find('#vue').attr('checked',true)
                    }
                    if(data.seeder)
                    {
                        container.find('#seeder').attr('checked',true)
                        container.find('.seeder-form').after(seederTemplateNode)
                        container.find('#name_seeder').val(data.name_seeder)
                    }
                    $('#button_success').val('Редактировать')
                    seeder()
                } else {
                    container.append("Выберите пакет")
                }
            }
        })
    })
})
