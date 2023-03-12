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
                console.log(data)
            }
        })
    })
})
