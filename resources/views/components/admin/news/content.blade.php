<div class="tab-pane active" id="content" role="tabpanel">
    <div class="form-grop mb-3">
        <label for="theme">Тема:</label>
        <input id="theme" class="form-control @error('theme') is-invalid @enderror" name="theme" value="{{old('theme')}}" />
        <x-error error-value="theme" />
    </div>
    <div class="form-group mb-3">
        <label for="news" >Новость:</label>
        <textarea name="news" id="my-editor" class="form-control @error('theme') is-invalid @enderror my-editor">{{ old('news') }}</textarea>
        <x-error error-value="news" />
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="">Изображение новости:</label>
                <div class="input-group">
                    <span class="input-group-btn">
                      <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
                        <i class="fa fa-picture-o"></i> Загрузка
                      </a>
                    </span>
                    <input id="thumbnail" class="form-control @error('file_news') is-invalid @enderror" type="text" name="file_news">
                    <x-error error-value="file_news" />
                </div>
                <img id="holder" style="margin-top:15px;max-height:100px;">
            </div>
        </div>
        <div class="col-md-3">
            <label for="date_news">Дата публикации (необязательно):</label>
            <input type="text" data-language="ru" name="date" id="addDate" class="form-control" value="">
        </div>
        <div class="col-md-3">
            <label>Время публикации (необязательно):</label>
            <div class="row align-items-center">
                <div class="col-md-5">
                    <select id="hour_news" name="hour_news" class="form-control @error('hour_news') is-invalid @enderror">
                        @for($i=1;$i<=60;$i++)
                            <option @if(old('hour_news') == $i) selected @endif value="{{$i}}">{{ substr("0".$i,-2,2) }}</option>
                        @endfor
                    </select>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                    :
                </div>
                <div class="col-md-5">
                    <select id="time_news" name="time_news" class="form-control @error('time_news') is-invalid @enderror">
                        @for($i=1;$i<=60;$i++)
                            <option @if(old('time_news') == $i) selected @endif value="{{$i}}">{{ substr("0".$i,-2,2) }}</option>
                        @endfor
                    </select>
                </div>
            </div>
        </div>
        <hr>
        <div class="col-md-6">
            <select></select>
        </div>
    </div>

</div>

<script src="/vendor/laravel-filemanager/js/lfm.js"></script>
<script>
    $('#lfm').filemanager('image');
</script>

{{--<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>--}}
{{--<script src="//ajax.aspnetcdn.com/ajax/jquery.ui/1.10.3/jquery-ui.min.js"></script>--}}
{{--<link rel="stylesheet" href="/jqueryui/1.12.1/jquery-ui.min.css">--}}
{{--<link rel="stylesheet" href="/jQuery-Timepicker-Addon/dist/jquery-ui-timepicker-addon.min.css">--}}
{{--<script src="/jquery/2.1.1/jquery.min.js"></script>--}}
{{--<script src="/jqueryui/1.12.1/jquery-ui.min.js"></script>--}}
{{--<script src="/jQuery-Timepicker-Addon/dist/jquery-ui-timepicker-addon.min.js"></script>--}}

{{--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-timepicker/1.13.18/jquery.timepicker.min.css">--}}
{{--<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>--}}
{{--<script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js"></script>--}}
{{--<link rel="stylesheet" href="https://code.jquery.com/ui/1.13.0/themes/smoothness/jquery-ui.css">--}}
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-timepicker/1.13.18/jquery.timepicker.min.js"></script>--}}


{{--<script>--}}
{{--    $(document).ready(()=>{--}}
{{--        let h = new Date();--}}
{{--        $('#addDate').datepicker({--}}
{{--            timepicker: true,  // добавляем опцию времени--}}
{{--            stepMinute: 5,    // устанавливаем интервал выбора времени в 5 минут--}}
{{--            disableNavWhenOutOfRange: true,--}}
{{--            toggleSelected: false,--}}
{{--            showTimePicker: true,--}}
{{--            multipleDatesSeparator: ' - ',--}}
{{--            defaultDateTime: new Date()  // устанавливаем начальную дату на текущую дату и время--}}
{{--        });--}}
{{--    })--}}


{{--</script>--}}

<link rel="stylesheet" href="https://code.jquery.com/ui/1.13.0/themes/smoothness/jquery-ui.css">
{{--<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>--}}
<script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-ui-timepicker-addon/1.6.3/jquery-ui-timepicker-addon.min.js" integrity="sha512-s5u/JBtkPg+Ff2WEr49/cJsod95UgLHbC00N/GglqdQuLnYhALncz8ZHiW/LxDRGduijLKzeYb7Aal9h3codZA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-ui-timepicker-addon/1.6.3/jquery-ui-timepicker-addon.min.css" integrity="sha512-LT9fy1J8pE4Cy6ijbg96UkExgOjCqcxAC7xsnv+mLJxSvftGVmmc236jlPTZXPcBRQcVOWoK1IJhb1dAjtb4lQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<input type="text" data-language="ru" name="date" id="addDate" class="form-control" value="">

<script>
    $(function() {
        $('#addDate').datetimepicker({
            dateFormat: "yy-mm-dd",
            timeFormat: "HH:mm:ss",
            controlType: "select",
            oneLine: true,
            hourMin: 0,
            hourMax: 23,
            minuteStep: 5,
            defaultDate: new Date()
        });
    });
</script>

