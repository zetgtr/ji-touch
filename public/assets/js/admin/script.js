$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $('.delete').on('click',(e)=>{
        e.preventDefault()
        let url = $(e.target).attr('href')
        $.ajax({
            type: "DELETE",
            url: url,
            success: function(result) {
                if (result.status) location.reload();
            }
        });
    })
});
